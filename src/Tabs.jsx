import { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{tabs[activeTab].content}</div>
    </>
  );
}
