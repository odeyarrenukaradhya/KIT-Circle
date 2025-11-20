import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Notes() {
  const { subject } = useParams();
  const [search, setSearch] = useState("");

  // Replace with Supabase results later
  const allNotes = [
    "Unit 1 Notes PDF",
    "Unit 2 Summary",
    "Complete Syllabus Notes",
    "Important Questions Notes",
  ];

  const filtered = allNotes.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{subject} Notes</h2>

        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded-xl bg-gray-100"
        />
      </header>

      <ul className="space-y-4">
        {filtered.map((note) => (
          <li key={note} className="p-4 bg-white border rounded-xl shadow">
            {note}
          </li>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-600">No notes found.</p>
        )}
      </ul>
    </section>
  );
}
