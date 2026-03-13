import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Tab 1", content: "This is Tab 1 Content" },
    { label: "Tab 2", content: "This is Tab 2 Content" },
    { label: "Tab 3", content: "This is Tab 3 Content" },
  ];

  return (
    <div>
      {/* Tab Buttons */}
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveTab(index)}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{tabs[activeTab].content}</div>
    </div>
  );
}
