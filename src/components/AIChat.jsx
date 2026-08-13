import { useState } from "react";
import portfolioData from "../data/portfolioData";

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Kanika's AI Portfolio Assistant. Ask me about her skills, projects, internships or experience.",
    },
  ]);

  // Existing portfolio-based response
  const getPortfolioResponse = (question) => {
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

      return `Kanika's projects include ${projectNames}. Her work focuses on AI, full-stack development, data analytics and practical problem solving.`;
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

    if (q.includes("resume") || q.includes("cv")) {
      return "You can view Kanika's resume using the Resume button in the navigation bar or Hero section.";
    }

    return null;
  };

  // Gemini API call
  const getGeminiResponse = async (question) => {
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `
You are Kanika Mohan's AI Portfolio Assistant.

Use the following portfolio information to answer questions:

Name: ${portfolioData.name}
Role: ${portfolioData.role}
Description: ${portfolioData.description}

Education:
${portfolioData.education.degree}
${portfolioData.education.college}
${portfolioData.education.duration}

Skills:
${JSON.stringify(portfolioData.skills)}

Internships:
${JSON.stringify(portfolioData.internships)}

Projects:
${JSON.stringify(portfolioData.projects)}

Certifications:
${JSON.stringify(portfolioData.certifications)}

Answer the user's question clearly and professionally.
If the question is unrelated to Kanika's portfolio, politely say that you can mainly answer questions about Kanika.

User question:
${question}
          `,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed");
      }

      return data.reply;
    } catch (error) {
      console.error("Gemini Error:", error);

      return null;
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!message.trim() || isLoading) return;

    const userQuestion = message.trim();

    const userMessage = {
      sender: "user",
      text: userQuestion,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    // First check portfolio-specific answers
    const portfolioResponse = getPortfolioResponse(userQuestion);

    if (portfolioResponse) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: portfolioResponse,
        },
      ]);

      setIsLoading(false);
      return;
    }

    // Otherwise use Gemini
    const aiResponse = await getGeminiResponse(userQuestion);

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text:
          aiResponse ||
          "Sorry, I couldn't connect to the AI right now. Please try again.",
      },
    ]);

    setIsLoading(false);
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
              <span>
                {isLoading ? "Thinking..." : "Ask me anything about Kanika"}
              </span>
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

            {isLoading && (
              <div className="chat-message ai">
                Thinking...
              </div>
            )}
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
              disabled={isLoading}
            />

            <button type="submit" disabled={isLoading}>
              →
            </button>
          </form>

        </div>
      )}
    </>
  );
}

export default AIChat;