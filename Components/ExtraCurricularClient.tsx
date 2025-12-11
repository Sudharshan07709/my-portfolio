"use client";

import { useState } from "react";
import ActivityModal from "./ActivityModal";
import type { ActivityItem } from "@/lib/types";

export default function ExtraCurricularClient({
  activities,
}: {
  activities: ActivityItem[];
}) {
  const [selected, setSelected] = useState<ActivityItem | null>(null);

  return (
    <section id="extra" className="w-full py-20 px-6">
      <h2 className="text-3xl font-bold text-white mb-10">Extra Curricular</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, i) => (
          <div
            key={i}
            className="bg-gray-900 p-4 rounded-xl cursor-pointer hover:scale-105 transition-all"
            onClick={() => setSelected(activity)}
          >
            <img src={activity.cover} alt={activity.title} className="w-full h-48 object-cover rounded-lg" />

            <h3 className="text-xl text-white mt-3 text-center">{activity.title}</h3>
          </div>
        ))}
      </div>

      {selected && (
        <ActivityModal
          isOpen={true}
          onClose={() => setSelected(null)}
          title={selected.title}
          images={selected.images}
          description={selected.description}
        />
      )}
    </section>
  );
}
