export const DarkModeIcon = () => {
  return (
    <svg
      onClick={() => {
        if (document.body.classList.contains("force-light-mode")) {
          document.body.classList.remove("force-light-mode");
          document.body.classList.add("force-dark-mode");
        } else if (document.body.classList.contains("force-dark-mode")) {
          document.body.classList.remove("force-dark-mode");
          document.body.classList.add("force-light-mode");
        } else {
          // Default action if neither class is present
          document.body.classList.add("force-light-mode");
        }
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8V16Z" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 4V8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z"
      />
    </svg>
  );
};
