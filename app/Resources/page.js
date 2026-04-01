import PageWrapper from "../components/PageWrapper";
import { BookOpen, Library, FileText } from "lucide-react";

export default function Resources() {
  return (
    <PageWrapper>
      <div className="flex justify-center items-center pt-8 pb-8">
        <div className="w-full bg-white shadow-xl p-14">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <Library className="w-48 h-48 text-blue-100" />
              <BookOpen className="w-48 h-48 text-blue-100" />
              <FileText className="w-48 h-48 text-blue-100" />
            </div>

            <div className="relative md:p-8">
              <h1 className="text-2xl text-center md:text-3xl text-stone-900">
                We&apos;re Fine-Tuning the Details—Check Back for Fresh
                <span className="text-blue-700 font-bold"> Insights</span>!
              </h1>
              <p className="pt-2 text-center">
                Articles, guides, and reference material for cattle producers
                and veterinarians will appear here as we publish them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
