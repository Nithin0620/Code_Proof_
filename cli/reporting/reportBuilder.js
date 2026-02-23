import path from "path";

// Boundary: reporting only. Must not import rule logic or AI logic.
// Reports are built from provided inputs to keep dependencies one-directional.

function toRelativePath(projectRoot, filePath) {
  if (!filePath) {
    return "";
  }
  const relative = path.relative(projectRoot, filePath);
  return relative || filePath;
}

function trimSnippet(snippet, maxLength = 200) {
  if (!snippet) {
    return "";
  }
  const trimmed = String(snippet).trim();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  return trimmed.slice(0, maxLength) + "...";
}

function redactSecretSnippet(ruleId, snippet) {
  if (!snippet) {
    return "";
  }
  if (String(ruleId || "").startsWith("secret.")) {
    return "***";
  }
  return snippet;
}

function mapDecisionConfidence(value) {
  if (typeof value !== "number") {
    return "low";
  }
  return value >= 0.75 ? "high" : "low";
}

function normalizeSeverity(value) {
  return value === "block" ? "block" : "warn";
}

export function buildReport({
  projectRoot,
  projectId,
  projectName,
  repoIdentifier,
  clientId,
  reportId,
  scanMode,
  filesScannedCount,
  baselineFindings,
  aiReviewed,
  timestamp
}) {
  const aiById = new Map(aiReviewed.map((entry) => [entry.finding.findingId, entry.decision]));

  const findings = baselineFindings.map((finding) => {
    const decision = aiById.get(finding.findingId);
    const severity = normalizeSeverity(decision ? decision.verdict : finding.severity);
    const confidence = decision
      ? mapDecisionConfidence(decision.confidence)
      : finding.confidence === "high"
        ? "high"
        : "low";

    const codeSnippet = trimSnippet(redactSecretSnippet(finding.ruleId, finding.snippet));
    const explanation = decision?.explanation || finding.message || "No explanation available";
    
    // Include AI escalation fields if AI was involved
    const aiEscalated = decision ? decision.aiEscalated === true : false;
    const aiFound = decision ? decision.aiFound === true : false;
    const risk = decision?.risk || undefined;
    const aiConfidence = decision?.aiConfidence || undefined;
    
    return {
      ruleId: finding.ruleId,
      severity,
      confidence,
      filePath: toRelativePath(projectRoot, finding.filePath),
      lineNumber: finding.line || 1,
      codeSnippet: codeSnippet || " ",
      explanation: explanation || "No explanation available",
      // AI escalation fields (optional)
      ...(aiEscalated && {
        aiEscalated,
        aiFound,
        risk,
        aiConfidence
      })
    };
  });

  const blocksCount = findings.filter((finding) => finding.severity === "block").length;
  const warningsCount = findings.filter((finding) => finding.severity === "warn").length;

  const finalVerdict = blocksCount > 0
    ? "blocked"
    : warningsCount > 0
      ? "allowed_with_warnings"
      : "allowed";

  // Server-compatible format
  return {
    projectId,
    clientId,
    project: {
      name: projectName || "Unknown Project",
      repoIdentifier: repoIdentifier || projectRoot
    },
    report: {
      timestamp,
      scanMode,
      summary: {
        filesScanned: filesScannedCount,
        findings: findings.length,
        blocks: blocksCount,
        warnings: warningsCount,
        finalVerdict
      }
    },
    findings,
    finalVerdict
  };
}
