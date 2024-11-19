const CustomerReview = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black max-w-4xl text-white min-h-screen flex flex-col items-center justify-center p-8 relative">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-left w-full">
          Customer Review
        </h2>

        {/* Review Box */}
        <div className="relative w-full max-w-4xl p-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            DialoAI has completely transformed our property inquiry management
            at Golden Horizon Realty. We're handling 3x more leads with 50% less
            staff. The AI telecaller understands nuanced client requirements,
            schedules viewings instantly, and provides personalized follow-ups.
            It's like having a superhuman sales agent working 24/7.
          </p>

          {/* Profile Section */}
        </div>
        <div className="flex w-full max-w-4xl items-start justify-start">
          <div className="mt-8 flex flex-col items-center mr-40">
            <img
              src="https://s3-alpha-sig.figma.com/img/174f/aded/e8628f65c914092552741f716b9b8039?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I17rM21Hqpr3-hss7vr1AXfSYBPX49NK-F-LoQmv0fG8Cbyar72pwVkW~t-mNFgiSfZ2yqRt06paF56v33-pWQhtxlIi87LSAqocHV4zkcdfRa3yx3ettCxqdigho525uR~LAN9MbLhYk5AewcyY2OW20AcW6TCsN14kNdgpwUL0PlbQj5YSUnV~g7F5ijDQD7Tc3eqXLILh6cD-B5hmFWAE-VGUgZ0KVhM8QkMcgm7n-h9ACwHtxcE50gwAPznOgMBXl4odo1oVyY~VPNoAtdvLDYoLsX7nxI22yYr9b66qjfBzLni~Bzy0KDY2DM68meXmPAvatVb74TLbIuHi2w__" // Replace with actual profile image
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-gray-500"
            />
            <h3 className="mt-4 text-lg font-semibold">Michael Reynolds</h3>
            <p className="text-sm text-gray-400">
              Founder & CEO at Golden Horizon Realty
            </p>
          </div>
          <div className="mt-40 flex gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-500"></span>
            <span className="w-3 h-3 rounded-full bg-teal-400"></span>
            <span className="w-3 h-3 rounded-full bg-gray-500"></span>
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
            <span className="text-white text-2xl">&lt;</span>
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
            <span className="text-white text-2xl">&gt;</span>
          </button>
        </div>

        {/* Pagination Dots */}
      </div>
    </div>
  );
};

export default CustomerReview;
