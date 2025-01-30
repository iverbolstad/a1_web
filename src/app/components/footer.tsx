export const Footer = () => {
  return (
    <footer className="bg-[#333533] bg-opacity-75 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <ul className="list-disc list-inside">
            <li>Telefon: +47 975 58 707</li>
            <li>E-post: post@anleggsgartner1.no</li>
            <li>Adresse: Skippergata 12,
            7042 Trondheim</li>
            <li>Org.nr: 924 688 769</li>
          </ul>
        </div>
        <div className="flex-1 text-right">
          <p>&copy; {new Date().getFullYear()} - Anleggsgartner 1 AS</p>
          <p>Created by <a href="https://www.linkedin.com/in/iver-bye-bolstad-167292227/" target="_blank" rel="noopener noreferrer">Iver Bolstad</a></p>
        </div>
      </div>
    </footer>
  );
};
