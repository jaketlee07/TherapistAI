import { useState, useRef } from "react";

const Quiz = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        age: "",
        gender: "",
        history: "",
        medication: "",
        family: "",

    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

    };

    return (

        <div className="xl:mt-12 flex flex-col items-center py-10">
        <p className="text-sage text-4xl sm:text-5xl text-center mt-4">
        Take The Quiz!
        </p>

        
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-3xl">
        <div className="mb-4">
            <label className="text-sage font-medium">What is your name?</label>
            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your response here"
            className="bg-tertiary py-3 px-4 placeholder-secondary text-black rounded-lg w-full outline-none border-none font-medium"
            />
        </div>
        <div className="mb-4">
            <label className="text-sage font-medium">What is your age?</label>
            <input
            type="age"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter your response here"
            className="bg-tertiary py-3 px-4 placeholder-secondary text-black rounded-lg w-full outline-none border-none font-medium"
            />
        </div>
        <div className="mb-4">
            <label className="text-sage font-medium">What is your gender?</label>
            <input
            type="age"
            name="age"
            value={form.gender}
            onChange={handleChange}
            placeholder="Enter your response here"
            className="bg-tertiary py-3 px-4 placeholder-secondary text-black rounded-lg w-full outline-none border-none font-medium"
            />
        </div>
        <div className="mb-4">
            <label className="text-sage font-medium">Do you have a history of mental illness?</label>
            <textarea
            name="message"
            value={form.history}
            onChange={handleChange}
            placeholder="Enter your response here"
            className="bg-tertiary py-3 px-4 placeholder-secondary text-black rounded-lg w-full outline-none border-none font-medium"
            />
        </div>
        <div className="mb-4">
            <label className="text-sage font-medium">Are you on any medication? Please specify</label>
            <textarea
            name="message"
            value={form.medication}
            onChange={handleChange}
            placeholder="Enter your response here"
            className="bg-tertiary py-3 px-4 placeholder-secondary text-black rounded-lg w-full outline-none border-none font-medium"
            />
        </div>

        <div className="mb-4">
            <label className="text-sage font-medium">Do you have a family history of mental health or medical issues that you think is relevant?</label>
            <textarea
            name="message"
            value={form.family}
            onChange={handleChange}
            placeholder="Enter your response here"
            className="bg-tertiary py-3 px-4 placeholder-secondary text-black rounded-lg w-full outline-none border-none font-medium"
            />
        </div>

        <button
            type="submit"
            className="bg-cyan-900 py-3 px-6 rounded-lg w-.25 outline-none text-white font-bold shadow-md bg-sage hover:bg-darksage text-beige ransition duration-200"
        >
            Talk To My TherapistAI
        </button>
        </form>
    </div>
    );

};

export default Quiz;