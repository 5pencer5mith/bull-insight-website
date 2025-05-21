import PageWrapper from "./components/PageWrapper";

export default function home() {
  return (
    <PageWrapper>
      <div className="w-full h-screen text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-shadow-lg/20 text-white text-9xl md:text-7xl">
            Your Home for a Healthy Herd
          </h1>
        </div>
        <img
          className="object-cover object-[100%_75%] w-full h-full"
          src="/img/hero/cattle-grazing-mountainside.jpg"
          alt="cattle grazing in a field"
        />
      </div>

      <div className="pt-8 pb-8">
        <div className="w-full bg-white shadow-xl">
          <div className="p-8">
            <div className="lg:text-left max-md:text-center">
              <h1 className="text-4xl">
                Welcome to Bull
                <span className="font-bold text-blue-700">Insight</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
