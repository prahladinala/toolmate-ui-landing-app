import {
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  DocumentDuplicateIcon,
  CodeBracketIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "Responsive Design",
    icon: PaintBrushIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    description:
      "The design of all the elements prioritizes responsiveness, ensuring that your interfaces will appear stunning on any type of device.",
  },
  {
    title: "Easy Integration",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    description:
      "ToolMate UI is crafted to effortlessly blend with your current projects, enabling you to start efficiently without any delays.",
  },
  {
    title: "Copy to Clipboard",
    icon: DocumentDuplicateIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    description:
      "ToolMate UI streamlines the process, allowing you to effortlessly copy component code to your clipboard, a simple time-saving feature.",
  },
  {
    title: "Customizable",
    icon: CodeBracketIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    description:
      "ToolMate UI components offer extensive customization options, making it a breeze to tailor their styles to align with your brand or product's identity.",
  },
  {
    title: "Regular Updates",
    icon: ClockIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    description:
      "The ToolMate UI library benefits from ongoing updates contributed by a dedicated community of developers, ensuring that it remains in sync with the latest design trends and adheres to best practices.",
  },
  {
    title: "Free and Open Source",
    icon: BanknotesIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    description:
      "You can utilize ToolMate UI at no cost, and its open-source framework welcomes your contributions, allowing you to actively participate in enhancing and improving the library.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Features() {
  return (
    <div className="bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Features 🔥
        </h2>
      </div>
      <div name="features" className="container mx-auto p-4 sm:p-6 lg:p-8 ">
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-px sm:divide-y-0">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "rounded-lg inline-flex p-3 ring-4 ring-white"
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
