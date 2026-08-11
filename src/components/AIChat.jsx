import { useState } from "react";
import portfolioData from "../data/portfolioData";

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Kanika's AI Portfolio Assistant. Ask me about her skills, projects, internships or experience.",
    },
  ]);

  const getAIResponse = (question) => {
    const q = question.toLowerCase();

    if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("technologies")
    ) {
      return `Kanika's main skills include Java, Python, JavaScript, SQL, React, Spring Boot, HTML, CSS, Bootstrap, Machine Learning, AI, Data Analytics, Power BI, Git and GitHub.`;
    }

    if (
      q.includes("project") ||
      q.includes("projects") ||
      q.includes("work")
    ) {
      const projectNames = portfolioData.projects
        .map((project) => project.title)
        .join(", ");

      return `Kanika has worked on projects including ${projectNames}. Her projects focus on AI, full-stack development, data analytics and practical problem solving.`;
    }

    if (
      q.includes("internship") ||
      q.includes("internships") ||
      q.includes("experience")
    ) {
      const internshipNames = portfolioData.internships
        .map(
          (internship) =>
            `${internship.title} at ${internship.company}`
        )
        .join("; ");

      return `Kanika's internship experience includes ${internshipNames}.`;
    }

    if (
      q.includes("education") ||
      q.includes("college") ||
      q.includes("degree")
    ) {
      return `Kanika is pursuing ${portfolioData.education.degree} at ${portfolioData.education.college} (${portfolioData.education.duration}).`;
    }

    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("linkedin") ||
      q.includes("github")
    ) {
      return `You can contact Kanika through ${portfolioData.social.emailAddress}. You can also find her on LinkedIn and GitHub using the links in the Contact section.`;
    }

    if (
      q.includes("about") ||
      q.includes("who is kanika") ||
      q.includes("who are you")
    ) {
      return portfolioData.description;
    }

    if (
      q.includes("resume") ||
      q.includes("cv")
    ) {
      return "You can view Kanika's resume using the Resume button in the navigation bar or Hero section.";
    }

    return "I can help you learn about Kanika's skills, projects, internships, education, resume and contact information. Try asking something like: \"What are her skills?\"";
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    const aiResponse = getAIResponse(message);

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        sender: "ai",
        text: aiResponse,
      },
    ]);

    setMessage("");
  };

  return (
    <>
      <button
        className="ai-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Portfolio Assistant"
      >
        ✨
      </button>

      {isOpen && (
        <div className="ai-chat-window">

          <div className="ai-chat-header">
            <div>
              <h3>AI Portfolio Assistant</h3>
              <span>Ask me anything about Kanika</span>
            </div>

            <button
              className="ai-close-button"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form
            className="ai-chat-input"
            onSubmit={handleSend}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about my skills..."
            />

            <button type="submit">
              →
            </button>
          </form>

        </div>
      )}
    </>
  );
}

export default AIChat;