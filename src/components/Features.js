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
      "All of the components are designed with responsiveness in mind, so you can be confident that your interfaces will look great on any device.",
  },
  {
    title: "Easy Integration",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    description:
      "ToolMate UI is designed to integrate seamlessly with your existing projects, allowing you to get up and running quickly.    ",
  },
  {
    title: "Copy to Clipboard",
    icon: DocumentDuplicateIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    description:
      "With ToolMate UI, you can easily copy the code for any component directly to your clipboard, saving you time and effort.    ",
  },
  {
    title: "Customizable",
    icon: CodeBracketIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    description:
      "ToolMate UI components are designed to be highly customizable and extendable. You can easily change the styles of the components to match your brand or product.    ",
  },
  {
    title: "Regular Updates",
    icon: ClockIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    description:
      "ToolMate UI is constantly updated by a community of developers, meaning that you can rely on the library to stay up-to-date with the latest design trends and best practices.    ",
  },
  {
    title: "Free and Open Source",
    icon: BanknotesIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    description:
      "ToolMate UI is free to use, and its open-source nature means that you can contribute to the library and help make it even better.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Features() {
  return (
    <div className="bg-gray-900">
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
