<template>
  <section class="section">
    <div class="container project-page">
      <div class="project-hero">
        <p class="page-label">PROJECT DETAIL</p>
        <h1>License Plate Detection AI</h1>
        <p class="page-text">
          This project is a computer vision system built to detect license plates in
          video footage and generate structured timestamp output for editors. The
          purpose of the system is to help media teams quickly find moments where
          license plates appear, so they can blur them before broadcasting and avoid
          legal problems.
        </p>
        <p class="page-text">
          Instead of manually scanning through large amounts of footage, the system
          processes video frames, detects license plates with AI models, and stores
          the results in JSON. That output can then be used inside the editing
          workflow to jump directly to the relevant moments. The project was built as
          an experimental AI pipeline, with multiple approaches and model comparisons
          across different development phases.
        </p>

        <div class="hero-actions">
          <router-link to="/" class="btn-secondary">
            Back to Home
          </router-link>
        </div>
      </div>

      <div class="project-grid">
        <article class="card info-card">
          <span class="info-label">Role</span>
          <h3>AI / computer vision development</h3>
          <p>
            I worked on building and testing the detection pipeline, experimenting
            with models, and turning raw video detections into practical output for
            an editing workflow.
          </p>
        </article>

        <article class="card info-card">
          <span class="info-label">Stack</span>
          <h3>Python, OpenCV, YOLOv8, Detectron2, Florence2</h3>
          <p>
            The project combines Python-based AI development with computer vision,
            detection, annotation, and JSON-based result generation.
          </p>
        </article>

        <article class="card info-card">
          <span class="info-label">Focus</span>
          <h3>Timestamp-based detection from real footage</h3>
          <p>
            The main goal was to detect license plates in realistic video footage
            and return usable timestamps so editors can quickly find and blur them.
          </p>
        </article>
      </div>

      <div class="content-layout">
        <div class="content-main">
          <div class="page-block">
            <h2>Project goal</h2>
            <p>
              The purpose of this project was to create an AI-driven system that
              detects license plates in video footage and converts those detections
              into structured output. The end goal was not just technical detection,
              but practical usefulness: editors need to know exactly when plates
              appear so they can blur them before the footage is broadcast.
            </p>
            <p>
              This makes the project directly relevant to media production. Instead
              of spending time manually reviewing long videos frame by frame, the
              system helps reduce that work by automatically identifying relevant
              moments and storing them in a machine-readable format.
            </p>
          </div>

          <div class="page-block">
            <h2>Real-world use case</h2>
            <p>
              In television and video production, visible license plates can create
              legal risks if they are shown unblurred in a final broadcast. Editors
              therefore need a reliable way to find those moments quickly.
            </p>
            <p>
              This project was built to support that process. The AI analyses the
              footage, finds frames where license plates are visible, and stores the
              detection moments in JSON with timestamps. That allows editors to jump
              directly to the important parts of the video and blur them more
              efficiently.
            </p>
          </div>

          <div class="page-block">
            <h2>How the system works</h2>
            <p>
              The system processes video frame by frame. For each selected frame, the
              model checks whether a license plate is present. If a plate is found,
              the system stores metadata such as the frame number, the timestamp in
              seconds, whether a plate was detected, and a confidence value.
            </p>
            <p>
              In addition to JSON output, the pipeline can also generate annotated
              video results. This makes it easier to visually verify whether the
              detections are correct and helps during evaluation and debugging.
            </p>
          </div>

          <div class="page-block">
            <h2>Models and experimentation</h2>
            <p>
              This project was not built around a single model only. It was
              developed through multiple experimental phases, where different
              approaches were explored and compared. The repository structure shows
              several iterations and test folders, which reflects an iterative
              development process rather than a single final script.
            </p>
            <p>
              Across the project, models and tools such as YOLOv8, Detectron2,
              Florence2, and SAM were explored. That made it possible to compare
              detection behaviour and evaluate which approach was the most useful for
              realistic footage with changing angles, motion, and lighting.
            </p>
          </div>

          <div class="page-block">
            <h2>What the system outputs</h2>
            <ul class="project-list">
              <li>Frame-by-frame license plate detection</li>
              <li>Annotated video output for visual validation</li>
              <li>JSON files with timestamps of relevant moments</li>
              <li>Detection confidence values per processed frame</li>
              <li>Structured output that supports the editor workflow</li>
            </ul>
          </div>

          <div class="page-block media-block">
            <h2>Model output demo</h2>
            <p>
              Below is an example of annotated output generated by the AI pipeline.
              This makes it easy to check whether the model correctly detects the
              license plate regions in the footage.
            </p>

            <div class="video-wrapper">
              <video controls playsinline preload="metadata" class="demo-video">
                <source src="/documents/annotated_output__1_.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p class="media-note">
              Place the file in your public folder as
              <code>/annotated_output__1_.mp4</code>.
            </p>
          </div>

          <div class="page-block">
            <h2>Example JSON output</h2>
            <p>
              A key part of this project is that the output is not only visual. The
              system also generates structured JSON so the detection results can be
              used directly in a practical workflow.
            </p>

            <pre class="code-block"><code>[
  {
    "frame": 120,
    "timestamp_seconds": 4.0,
    "license_plate_detected": true,
    "confidence": 0.82
  },
  {
    "frame": 123,
    "timestamp_seconds": 4.1,
    "license_plate_detected": true,
    "confidence": 0.79
  },
  {
    "frame": 126,
    "timestamp_seconds": 4.2,
    "license_plate_detected": false,
    "confidence": 0.0
  }
]</code></pre>

            <p>
              This kind of output allows editors or downstream tools to know exactly
              where potentially sensitive content appears in the timeline.
            </p>
          </div>

          <div class="page-block">
            <h2>Development approach</h2>
            <p>
              The project was approached as a full computer vision pipeline rather
              than a single model test. The workflow starts with video input,
              continues with frame selection and inference, and ends with annotated
              output and JSON export.
            </p>
            <p>
              This engineering-focused structure made it easier to experiment, test
              results, compare models, and gradually improve the system. Instead of
              seeing AI as a black box, I treated it as an iterative process of
              building, evaluating, and refining.
            </p>
          </div>

          <div class="page-block">
            <h2>Challenges</h2>
            <p>
              One of the biggest challenges was dealing with realistic footage.
              License plates are not always clearly visible. Motion blur, lighting
              changes, reflections, occlusion, distance, and camera angles all make
              detection harder.
            </p>
            <p>
              Another challenge was translating detections into output that is
              genuinely useful for editors. That means the problem was not only
              about accuracy, but also about making the results practical and easy
              to work with in a production context.
            </p>
          </div>

          <div class="page-block">
            <h2>What I learned</h2>
            <p>
              This project helped me gain practical experience in computer vision,
              model experimentation, and AI pipeline design. I learned how to move
              from a real-world problem to a technical workflow that produces useful
              results instead of only theoretical model output.
            </p>
            <p>
              It also taught me the importance of iteration. A working AI solution
              depends on much more than only the model itself. Data handling,
              preprocessing, evaluation, output design, and usability all matter if
              the system is meant to solve a real production problem.
            </p>
          </div>

          <div class="page-block">
            <h2>Future improvements</h2>
            <ul class="project-list">
              <li>Improve robustness on more difficult lighting and motion conditions</li>
              <li>Reduce false positives in busy or low-quality footage</li>
              <li>Expand the output so detections can be grouped into blur segments</li>
              <li>Improve evaluation and comparison between tested models</li>
              <li>Make the workflow easier to integrate into a professional editing pipeline</li>
            </ul>
          </div>
        </div>

        <aside class="content-side">
          <div class="card side-card">
            <h3>Project summary</h3>
            <ul class="project-list compact">
              <li>AI system for detecting license plates in video</li>
              <li>Generates timestamp JSON for editors</li>
              <li>Supports legal-safe media production</li>
              <li>Uses computer vision and multiple model experiments</li>
            </ul>
          </div>

          <div class="card side-card">
            <h3>Key takeaway</h3>
            <p>
              This project taught me how to turn a real media-production problem
              into a usable AI workflow that combines detection, annotation, and
              structured output for human teams.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.project-hero h1 {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  line-height: 0.98;
  color: white;
  letter-spacing: -0.04em;
  max-width: 900px;
}

.page-label {
  margin: 0 0 14px;
  color: #a5b4fc;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.page-text {
  margin-top: 22px;
  max-width: 820px;
  color: #cbd5e1;
  line-height: 1.85;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.info-card {
  padding: 24px;
}

.info-label {
  display: inline-block;
  margin-bottom: 12px;
  color: #a5b4fc;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.info-card h3 {
  margin: 0 0 10px;
  color: white;
  font-size: 1.12rem;
}

.info-card p {
  margin: 0;
  color: #94a3b8;
  line-height: 1.7;
}

.content-layout {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 28px;
  align-items: start;
}

.content-main,
.content-side {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.page-block {
  padding: 28px 30px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.page-block h2,
.side-card h3 {
  margin: 0 0 14px;
  color: white;
}

.page-block p,
.side-card p {
  margin: 0 0 14px;
  color: #cbd5e1;
  line-height: 1.85;
}

.page-block p:last-child,
.side-card p:last-child {
  margin-bottom: 0;
}

.side-card {
  padding: 24px;
}

.project-list {
  margin: 0;
  padding-left: 18px;
  color: #cbd5e1;
  line-height: 1.8;
}

.project-list.compact li + li {
  margin-top: 8px;
}

.media-block {
  overflow: hidden;
}

.video-wrapper {
  margin-top: 18px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.demo-video {
  display: block;
  width: 100%;
  height: auto;
}

.media-note {
  margin-top: 14px;
  color: #94a3b8;
  font-size: 0.95rem;
}

.media-note code {
  color: #cbd5e1;
}

.code-block {
  margin: 18px 0 0;
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow-x: auto;
}

.code-block code {
  color: #e2e8f0;
  font-size: 0.95rem;
  line-height: 1.7;
  font-family: ui-monospace, SFMono-Regular, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  white-space: pre;
}

@media (max-width: 950px) {
  .project-grid,
  .content-layout {
    grid-template-columns: 1fr;
  }
}
</style>