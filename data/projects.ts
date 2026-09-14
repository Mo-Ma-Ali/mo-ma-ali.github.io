export type Project = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  stack: string[];
  language: string;
  href: string;
  field: string;
};

// Sourced from https://github.com/Mo-Ma-Ali (pinned repositories).
// Edit `summary`, `detail`, and `stack` with specifics once you're ready —
// GitHub doesn't expose full write-ups on the profile page, so these are
// starting descriptions based on each repo's name and primary language.
export const projects: Project[] = [
  {
    slug: "ai-meeting-summarization",
    title: "Meeting Summarization for Syrian Arabic",
    field: "Natural Language Processing",
    summary:
      "An AI-powered meeting summarization system for Syrian Arabic conversational speech, combining topic segmentation, abstractive summarization, and decision extraction using a fine-tuned language model.",
    detail:
      "Built an end-to-end NLP system for summarizing Syrian Arabic meeting transcripts. The project involved generating and augmenting a custom dataset, fine-tuning Qwen2.5-3B-Instruct using LoRA/QLoRA, evaluating the approach against mT5, and deploying the resulting model locally through a FastAPI backend using GGUF and Ollama.",
    stack: [
      "Python",
      "PyTorch",
      "NLP",
      "LLM",
      "Qwen2.5-3B",
      "Transformers",
      "LoRA",
      "QLoRA",
      "FastAPI",
      "Ollama",
      "GGUF",
    ],
    language: "Python",
    href: "https://github.com/Mo-Ma-Ali/AI-meeting-summarization-",
  },

  {
    slug: "leukemia-detection",
    title: "White Blood Cell Classification & Leukemia Detection",
    field: "Medical imaging",
    summary:
      "A computer vision pipeline that classifies white blood cells and flags indicators of leukemia from microscopy images.",
    detail:
      "Built as a notebook-driven research project: image preprocessing, a trained classifier over blood cell types, and evaluation aimed at supporting early leukemia screening.",
    stack: ["Python", "Jupyter Notebook", "Computer Vision"],
    language: "Jupyter Notebook",
    href: "https://github.com/Mo-Ma-Ali/-White-Blood-Cell-Classification-and-Leukemia-Detection-System",
  },
  {
    slug: "arabic-punctuation",
    title: "Arabic Punctuation Restoration",
    field: "Natural language processing",
    summary:
      "An NLP model that restores punctuation in unpunctuated Arabic text, a common preprocessing step for Arabic speech and language pipelines.",
    detail:
      "Focused on Arabic's specific script and grammar challenges, where punctuation is often dropped in raw transcripts and needs to be reconstructed before downstream tasks like summarization or parsing.",
    stack: ["Python", "NLP", "Arabic Language Processing"],
    language: "Python",
    href: "https://github.com/Mo-Ma-Ali/punctuation_ARABIC_NLP",
  },
  {
    slug: "robotic-ordering-cubes",
    title: "Robotic Ordering Cubes",
    field: "Robotics",
    summary:
      "A Python-based system for controlling and sequencing robotic sorting or ordering of cube objects.",
    detail:
      "Explores planning and control logic for a robotic arm or agent tasked with arranging cubes into a target order — a compact testbed for manipulation and sequencing algorithms.",
    stack: ["Python", "Robotics", "Control Systems"],
    language: "Python",
    href: "https://github.com/Mo-Ma-Ali/Robotic_Ordering_Cubes",
  },
  {
    slug: "soft-body-vr",
    title: "Soft-Body Physics Simulation in Unity VR",
    field: "Simulation & VR",
    summary:
      "A real-time soft-body physics simulation built in Unity and experienced in virtual reality.",
    detail:
      "Simulates deformable, non-rigid bodies in a VR environment, balancing physical plausibility against the performance constraints of real-time rendering.",
    stack: ["C#", "Unity", "Virtual Reality", "Physics Simulation"],
    language: "C#",
    href: "https://github.com/Mo-Ma-Ali/Soft-Body-Physics-Simulation-System-in-Unity-VR-",
  },
  {
    slug: "home-workout",
    title: "Home Workout",
    field: "Web application",
    summary:
      "A Laravel web application for planning and tracking home workout routines.",
    detail:
      "A full-stack PHP/Laravel build covering the standard slice of a consumer web app: routes, views, and data models for structuring workout content.",
    stack: ["PHP", "Laravel"],
    language: "PHP",
    href: "https://github.com/Mo-Ma-Ali/Home-Workout",
  },
];
