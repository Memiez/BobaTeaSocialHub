import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 5"
            >
              <path d="M2.5 0A2.5 2.5 0 1 1 0 2.5 2.5 2.5 0 0 1 2.5 0zm0 5A2.5 2.5 0 1 0 5 2.5 2.5 2.5 0 0 0 2.5 5zm7.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm7.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            className="mb-3 rounded-full shadow-lg"
            src="https://img5.pic.in.th/file/secure-sv1/tapioca-pea.png"
            alt="Profile image"
            width={96}
            height={96}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Tea
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add friend
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
