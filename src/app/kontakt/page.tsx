export default function Kontakt() {
    return (
        <div className="my-10 pt-20">
            <h1 className="text-3xl font-bold text-center w-full mb-6">
                Kontakt oss
            </h1>
            
            <div className="flex flex-col md:flex-row">
                {/* Contact Form Section */}
                <div className="w-full md:w-1/2 p-6">
                    <form className="max-w-md mx-auto space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-1"
                            >
                                Navn
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-1"
                            >
                                Epost
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-1"
                            >
                                Melding
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-3 py-2 border rounded"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                        >
                            Send
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="w-full md:w-1/2 h-[400px] md:h-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1783.9918530089783!2d10.415837377164566!3d63.43991217548622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d303bb9c9e38b%3A0x178f764938272e56!2sAnleggsgartner%201%20AS!5e0!3m2!1sno!2sno!4v1737403395805!5m2!1sno!2sno"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
