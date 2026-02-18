import React from "react";
import { FaLaptopCode, FaBuilding, FaRocket } from "react-icons/fa";

const OurWork = () => {
    return (
        <main className="bg-white">

            {/* ================= HERO ================= */}
            <section className="px-6 pt-32 pb-20 bg-[#0e0e0e] text-white">
                <div className="max-w-6xl mx-auto text-center">

                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Work That Solves <br className="hidden sm:block" />
                        Real Problems
                    </h1>

                    <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
                        Our work reflects how we think — clarity before code,
                        strong foundations, and solutions built for long-term impact.
                    </p>

                </div>
            </section>

            {/* ================= APPROACH ================= */}
            <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-gray-900">
                        How We Approach Every Project
                    </h2>

                    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <ApproachCard
                            icon={<FaBuilding />}
                            title="Business Understanding"
                            text="We begin by understanding the business, users, and constraints — not just requirements."
                        />
                        <ApproachCard
                            icon={<FaLaptopCode />}
                            title="Thoughtful Engineering"
                            text="Architecture, scalability, and maintainability are considered from day one."
                        />
                        <ApproachCard
                            icon={<FaRocket />}
                            title="Long-Term Impact"
                            text="We build systems that continue to deliver value as businesses grow."
                        />
                    </div>

                </div>
            </section>

            {/* ================= PROJECTS ================= */}
            <section className="px-6 py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-bold text-gray-900 text-center">
                        Selected Projects
                    </h2>

                    <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
                        A snapshot of the kind of problems we solve and the solutions we build.
                    </p>

                    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        <ProjectCard
                            title="Business Portfolio Platform"
                            description="A scalable platform for businesses to showcase services, projects, and brand identity."
                            tags={["Web App", "UI/UX", "Scalable Architecture"]}
                        />

                        <ProjectCard
                            title="Authentication & Access System"
                            description="A secure authentication system designed for reuse across multiple applications."
                            tags={["Security", "Backend", "Scalable"]}
                        />

                        <ProjectCard
                            title="NGO Digital Presence"
                            description="A modern website to help NGOs communicate impact and reach more supporters."
                            tags={["Web", "Accessibility", "Content Driven"]}
                        />

                    </div>

                </div>
            </section>

            {/* ================= INDUSTRIES ================= */}
            <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-gray-900">
                        Domains We’ve Worked In
                    </h2>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {[
                            "Startups",
                            "Small Businesses",
                            "Education",
                            "NGOs",
                            "Internal Tools",
                            "Portfolio Platforms",
                        ].map((item, i) => (
                            <span
                                key={i}
                                className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA handled globally */}

        </main>
    );
};

export default OurWork;

/* ================= COMPONENTS ================= */

const ApproachCard = ({ icon, title, text }) => {
    return (
        <div className="bg-white rounded-xl p-6 border border-gray-100 card-shadow">
            <div className="text-blue-600 text-3xl">
                {icon}
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">
                {title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
                {text}
            </p>
        </div>
    );
};

const ProjectCard = ({ title, description, tags }) => {
    return (
        <div className="bg-white rounded-xl p-6 border border-gray-100 card-shadow
      hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">

            <h3 className="text-lg font-semibold text-gray-900">
                {title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </div>
    );
};
