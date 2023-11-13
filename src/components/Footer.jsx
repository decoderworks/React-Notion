// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-white text-black p-4">
      <hr className="border border-gray-900" />
      <div className="md:mt-2 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:ml-6 gap-4">
        {/* Section 1 */}
        <div className="">
          <h2 className="text-lg font-bold mb-2">Section 1</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-bold mb-2">Section 2</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-bold mb-2">Section 3</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-lg font-bold mb-2">Section 4</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
