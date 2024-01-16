import { useTina } from "tinacms/dist/react";

interface TinaSimpleReactHelperProps {
  tina: any;
  path: string;
  tinaPath: string;
  children?: any;
  "client:tina": boolean; // or whatever the type should be
}
export const TinaSimpleReactHelper: React.FC<TinaSimpleReactHelperProps> = ({
  tina,
  path,
  tinaPath,
  children,
}) => {
  console.log("🚀 ~ tina:", tina);
  useTina(tina);
  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  return (
    <>
      <nav className="text-neutral-content flex items-center gap-4 bg-gray-900 p-4">
        <div className="container">
          <span className="font-bold">TinaCMS:</span>{" "}
          {inIframe() ? (
            <a href={`/${path}`} target="_blank" className="btn btn-primary">
              View{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
                />
              </svg>
            </a>
          ) : (
            <a
              href={`/admin/index.html#/~/${tinaPath}`}
              target="_blank"
              className="btn btn-primary"
            >
              Edit
            </a>
          )}
        </div>
      </nav>
      {children}
    </>
  );
};
