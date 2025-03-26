export function Chatbot() {
  const chatbotUrl = "https://www.chatbase.co/chatbot-iframe/nZvinh85jj6HgiIx2bnzD";

  const openChatbot = () => {
    window.open(chatbotUrl, "_blank");
  };

  return (
    <button
      onClick={openChatbot}
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
    >
      💬 Chat with AI
    </button>
  );
};



