import React, { useState, useEffect } from 'react';

const SpeechToText = ({ set }) => {
  const [transcription, setTranscription] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = React.useRef(null);

  useEffect(() => {
    if (isRecording) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscription(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current.start();
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    }
  }, [isRecording]);

  const handleStartButtonClick = () => {
    setIsRecording(true);
  };

  const handleStopButtonClick = () => {
    setIsRecording(false);
  };

  const handleMicButtonClick = () => {
    if (isRecording) {
      handleStopButtonClick();
    } else {
      handleStartButtonClick();
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded shadow-md">
      <label className="block text-gray-600 mb-2">Problem</label>
      <textarea
        className="w-64 h-32 p-2 bg-gray-300 rounded"
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
      />
      <div className="relative mt-4">
        <button
          onClick={handleMicButtonClick}
          className={`${isRecording
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-green-500 hover:bg-green-600'
            } text-white py-2 px-4 rounded absolute right-0 bottom-0 mb-2 mr-2`}
        >
          {isRecording ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="1" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="12" y1="6" x2="12" y2="9" />
              <line x1="16" y1="4" x2="19" y2="7" />
              <line x1="5" y1="7" x2="8" y2="4" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 4 15 12 5 20 5 4" />
              <line x1="19" y1="5" x2="19" y2="19" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default SpeechToText;
