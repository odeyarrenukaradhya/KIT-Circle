import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Assignments() {
  const { subject } = useParams();
  const [search, setSearch] = useState("");

  // Replace with Supabase data later
  const allAssignments = [
    "Assignment 1 PDF",
    "Assignment 2 Questions",
    "Lab Assignment",
    "Mini Project File",
  ];

  const filtered = allAssignments.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{subject} Assignments</h2>

        <input
          type="text"
          placeholder="Search assignments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded-xl bg-gray-100"
        />
      </header>

      <ul className="space-y-4">
        {filtered.map((a) => (
          <li key={a} className="p-4 bg-white border rounded-xl shadow">
            {a}
          </li>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-600">No assignments found.</p>
        )}
      </ul>
    </section>
  );
}
