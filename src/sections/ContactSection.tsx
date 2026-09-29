"use client";

import { LuMail, LuPhone, LuMapPin, LuSend } from "react-icons/lu";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";

const contactInfo = [
    {
        icon: LuMail,
        label: "Email",
        value: "akhmadnauval03@gmail.com",
        href: "mailto:akhmadnauval03@gmail.com"
    },
    {
        icon: LuPhone,
        label: "Phone",
        value: "+62 XXX XXX XXX",
        href: "tel:+62 XXX XXX XXX"
    },
    {
        icon: LuMapPin,
        label: "Location",
        value: "Indonesia",
        href: "#"
    }
]

export default function ContactSection() {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "6e9bba10-32a3-4b26-8501-0d8ce760c722");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
        toast.success("Form submitted successfully");
      event.target.reset();
    } else {
        toast.error("Error submitting form");
    }

    setLoading(false);
  };

    return (
        <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
            <div className="absolute top-1/3 right-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
                <SectionHeader title="Lets's build" higlight="something great" badge="Contact" description="Have a project in mind I'd love to hear about it. Let's connect." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* left-form */}
                    <form data-aos="fade-right" data-aos-delay="100" data-aos-anchor-placement="top-center" onSubmit={onSubmit} className="p-6 rounded-2xl bg-surface border border-border space-y-5">
                        <h3 className="text-lg font-semibold text-text">Send a message</h3>
                        {/* name */}
                        <div>
                            <label className="text-sm text-gray-400 block mb-1">Name</label>
                            <input name="name" type="text" placeholder="Your name" className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition" />
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 block mb-1">Email</label>
                            <input name="email" type="text" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition" />
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 block mb-1">Message</label>
                            <textarea name="message" required rows={4} placeholder="Your message..." className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition resize-none" />
                        </div>

                        <button disabled={loading} type="submit" className="w-full py-3 rounded-full bg-primary text-gray-200 font-medium hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer">
                            {loading ? <>
                            <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Sending message...
                            </> : <>
                            Send Message
                             <LuSend className="w-4 h-4"/>
                            </>} 
                           
                        </button>
                    </form>
                    {/* right - contact info */}
                    <div className="p-2" data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="top-center">
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <Link href={item.href} key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            {item.label}
                                        </div>
                                        <div className="font-medium">
                                            {item.value}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}