// Custom mermaid configuration for terminal theme
// Large readable text, terminal colors

function css(name) {
  return "rgb(" + getComputedStyle(document.documentElement).getPropertyValue(name) + ")";
}

function initMermaidLight() {
  mermaid.initialize({
    theme: "base",
    themeVariables: {
      background: "#f8fff8",
      primaryColor: "#d0ffc0",
      primaryTextColor: "#002000",
      primaryBorderColor: "#40c040",
      secondaryColor: "#c0e8ff",
      secondaryTextColor: "#002040",
      secondaryBorderColor: "#4090c0",
      tertiaryColor: "#e0ffe0",
      tertiaryTextColor: "#003000",
      tertiaryBorderColor: "#60a060",
      lineColor: "#408040",
      textColor: "#002000",
      mainBkg: "#d0ffc0",
      nodeBorder: "#40c040",
      clusterBkg: "#f0fff0",
      clusterBorder: "#60c060",
      titleColor: "#002000",
      edgeLabelBackground: "#f8fff8",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontSize: "12px",
    },
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: "basis",
      padding: 8,
      nodeSpacing: 20,
      rankSpacing: 30,
    },
    sequence: {
      useMaxWidth: true,
      mirrorActors: false,
      actorFontSize: 12,
      messageFontSize: 12,
      noteFontSize: 11,
    },
  });
}

function initMermaidDark() {
  mermaid.initialize({
    theme: "base",
    themeVariables: {
      background: "#001008",
      primaryColor: "#003018",
      primaryTextColor: "#40ff40",
      primaryBorderColor: "#40ff40",
      secondaryColor: "#082030",
      secondaryTextColor: "#40c0ff",
      secondaryBorderColor: "#40c0ff",
      tertiaryColor: "#002010",
      tertiaryTextColor: "#80ff80",
      tertiaryBorderColor: "#40a040",
      lineColor: "#40ff40",
      textColor: "#c0ffc0",
      mainBkg: "#003018",
      nodeBorder: "#40ff40",
      clusterBkg: "#001810",
      clusterBorder: "#40ff40",
      titleColor: "#40ff40",
      edgeLabelBackground: "#001008",
      actorTextColor: "#40ff40",
      actorBorder: "#40ff40",
      actorBkg: "#002010",
      signalColor: "#40ff40",
      signalTextColor: "#c0ffc0",
      labelBoxBkgColor: "#001008",
      labelBoxBorderColor: "#40ff40",
      labelTextColor: "#40ff40",
      loopTextColor: "#c0ffc0",
      noteBorderColor: "#40a040",
      noteBkgColor: "#002010",
      noteTextColor: "#c0ffc0",
      activationBorderColor: "#40ff40",
      activationBkgColor: "#003018",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontSize: "12px",
    },
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: "basis",
      padding: 8,
      nodeSpacing: 20,
      rankSpacing: 30,
    },
    sequence: {
      useMaxWidth: true,
      mirrorActors: false,
      actorFontSize: 12,
      messageFontSize: 12,
      noteFontSize: 11,
    },
  });
}
