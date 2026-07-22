import React from "react";
import { Star, Award, Users, Shield, Cpu, Activity } from "lucide-react";

export function TrustIndicators() {
  const items = [
    {
      icon: Star,
      title: "4.9 ★★★★★ Rated",
      subtitle: "2,500+ Google Reviews",
      iconColor: "text-amber-500",
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      subtitle: "Serving Since 2002",
      iconColor: "text-primary-700",
    },
    {
      icon: Users,
      title: "98,000+ Surgeries",
      subtitle: "Proven Surgical Expertise",
      iconColor: "text-accent-600",
    },
    {
      icon: Shield,
      title: "NABH Accredited",
      subtitle: "Highest Safety Standards",
      iconColor: "text-primary-700",
    },
    {
      icon: Cpu,
      title: "Advanced Laser Tech",
      subtitle: "Contoura & Femto LASIK",
      iconColor: "text-accent-600",
    },
    {
      icon: Activity,
      title: "24x7 Emergency Care",
      subtitle: "Full Clinical Backup",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className={`p-2.5 rounded-xl bg-slate-50 mb-3 ${item.iconColor}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-sm leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
