import HorizontalScrollList from "@/components/common/HorizontalScrollList";
import DealsSection from "@/components/common/DealsSection";
import CategoryCarousel from "@/components/common/CategoryCarousal";
import RecentlyViewedList from "@/components/common/RecentlyViewedList";

export default function AdminPage() {
  return (
    <>
      {/* Horizontal Scroll List Section */}
      <HorizontalScrollList />
      <RecentlyViewedList />

      <CategoryCarousel />

      {/* Ad Placement Section */}
      <div className="bg-[#EDF5F5] h-52 w-full flex items-center justify-center mt-8">
        <h2 className="text-center text-lg font-semibold">Ad Placement</h2>
      </div>

      {/* Deals Section */}
      <section className="flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col">
            <DealsSection />
          </div>
        </div>
      </section>
    </>
  );
}
