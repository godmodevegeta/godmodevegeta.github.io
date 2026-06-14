export default function SplunkTalon() {
  const htmlContent = `
    <div class="bg-grid"></div>
    <div class="container">
        <div class="header">
            <h1>TALON <span>SchemaOps</span></h1>
            <div class="subtitle">Autonomous Data Engineering Agent for Splunk Log Onboarding</div>
            <div class="tagline">40 hours of manual work → 30 minutes of agentic TDD</div>
        </div>

        <div class="layer layer-ui">
            <div class="layer-header">
                <div class="icon">🖥️</div>
                <div>Layer 1: User Interface — Streamlit Frontend</div>
            </div>
            <div class="layer-content">
                <div class="component">
                    <div class="component-title">
                        Mode: DROP
                        <span class="badge badge-ui">Entry Point</span>
                    </div>
                    <div class="component-desc">File uploader with live preview. Accepts raw log files or paste text. Shows file stats.</div>
                    <div class="component-tech">
                        <span class="tech-tag">Streamlit</span>
                        <span class="tech-tag">st.file_uploader</span>
                    </div>
                </div>
                <div class="component">
                    <div class="component-title">
                        Mode: ITERATE
                        <span class="badge badge-core">The Drama</span>
                    </div>
                    <div class="component-desc">Real-time terminal visualization of the TDD loop.</div>
                    <div class="component-tech">
                        <span class="tech-tag">st.status</span>
                        <span class="tech-tag">CSS animations</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="layer layer-agent">
            <div class="layer-header">
                <div class="icon">🧠</div>
                <div>Layer 2: Agentic Core</div>
            </div>
            <div class="layer-content">
                <div class="component">
                    <div class="component-title">
                        SchemaOps Agent
                        <span class="badge badge-core">Brain</span>
                    </div>
                    <div class="component-desc">Multi-tier LLM orchestrator for Splunk config generation.</div>
                    <div class="component-tech">
                        <span class="tech-tag">OpenAI SDK</span>
                        <span class="tech-tag">gpt-oss-120b</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="tdd-loop">
            <h2>🔄 The Agentic TDD Loop</h2>
            <div class="loop-container">
                <div class="loop-node generate">
                    <div class="node-icon">📝</div>
                    <div>GENERATE</div>
                </div>
                <div class="loop-connector"></div>
                <div class="loop-node deploy">
                    <div class="node-icon">🚀</div>
                    <div>DEPLOY</div>
                </div>
                <div class="loop-connector"></div>
                <div class="loop-node validate">
                    <div class="node-icon">🔍</div>
                    <div>VALIDATE</div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>TALON SchemaOps</p>
        </div>
    </div>
  `;

  return (
    <>
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            background: #0a0a0a;
            color: #e0e0e0;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .bg-grid {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(101, 166, 55, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(101, 166, 55, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            pointer-events: none;
            z-index: 0;
        }

        .container {
            position: relative;
            z-index: 1;
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 50px;
            padding: 30px 0;
            border-bottom: 2px solid #1a1a1a;
        }

        .header h1 {
            font-size: 3.5rem;
            font-weight: 700;
            color: #65a637;
            letter-spacing: -2px;
            margin-bottom: 10px;
        }

        .header h1 span {
            color: #1e93ae;
        }

        .header .subtitle {
            font-size: 1.2rem;
            color: #888;
            font-weight: 300;
        }

        .header .tagline {
            margin-top: 15px;
            padding: 10px 25px;
            background: rgba(101, 166, 55, 0.1);
            border: 1px solid rgba(101, 166, 55, 0.3);
            border-radius: 30px;
            display: inline-block;
            font-size: 0.95rem;
            color: #65a637;
        }

        .layer {
            margin-bottom: 40px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #222;
            background: rgba(20, 20, 20, 0.8);
            backdrop-filter: blur(10px);
        }

        .layer-header {
            padding: 18px 25px;
            font-size: 1.1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .layer-header .icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        .layer-ui { border-color: #65a637; }
        .layer-ui .layer-header { background: rgba(101, 166, 55, 0.1); color: #65a637; }

        .layer-agent { border-color: #e6a23c; }
        .layer-agent .layer-header { background: rgba(230, 162, 60, 0.1); color: #e6a23c; }

        .layer-content {
            padding: 25px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .component {
            background: rgba(30, 30, 30, 0.9);
            border-radius: 10px;
            padding: 20px;
            border: 1px solid #333;
            transition: all 0.3s ease;
        }

        .component:hover {
            transform: translateY(-3px);
            border-color: #555;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .component-title {
            font-size: 1rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .component-title .badge {
            font-size: 0.65rem;
            padding: 2px 8px;
            border-radius: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .badge-core { background: rgba(101, 166, 55, 0.2); color: #65a637; }
        .badge-ui { background: rgba(144, 147, 153, 0.2); color: #909399; }

        .component-desc {
            font-size: 0.85rem;
            color: #aaa;
            line-height: 1.5;
            margin-bottom: 12px;
        }

        .component-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .tech-tag {
            font-size: 0.7rem;
            padding: 3px 10px;
            background: rgba(255,255,255,0.05);
            border-radius: 4px;
            color: #888;
            border: 1px solid #333;
        }

        .tdd-loop {
            margin-top: 50px;
            text-align: center;
        }

        .tdd-loop h2 {
            font-size: 2rem;
            color: #65a637;
            margin-bottom: 40px;
        }

        .loop-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0;
        }

        .loop-node {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 0.85rem;
            font-weight: 600;
            border: 3px solid;
            background: rgba(20, 20, 20, 0.95);
            padding: 10px;
        }

        .loop-node .node-icon {
            font-size: 2rem;
            margin-bottom: 8px;
        }

        .loop-node.generate {
            border-color: #e6a23c;
            color: #e6a23c;
        }

        .loop-node.deploy {
            border-color: #1e93ae;
            color: #1e93ae;
        }

        .loop-node.validate {
            border-color: #65a637;
            color: #65a637;
        }

        .loop-connector {
            width: 40px;
            height: 3px;
            background: linear-gradient(90deg, #e6a23c, #1e93ae);
        }

        .loop-connector::after {
            content: '▶';
            position: relative;
            left: 8px;
            color: #1e93ae;
        }

        .footer {
            margin-top: 60px;
            text-align: center;
            padding: 30px;
            border-top: 1px solid #222;
            color: #555;
            font-size: 0.85rem;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
