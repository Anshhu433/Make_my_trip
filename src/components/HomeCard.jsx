import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const HomeCard = ({ hotel }) => {
  const { thumbNailUrl, name, hotelRating, price } = hotel;

  return (
    // <div className="z-10 overflow-hidden rounded-lg border shadow-md">
    //   <img src={imageUrls[0]} alt={name} className="h-48 w-full object-cover" />
    //   <div className="p-4">
    //     <h3 className="text-lg font-semibold">{name}</h3>

    //     <Rating value={rating} />

    //     <p className="mt-2 flex justify-between gap-1 text-xl">
    //       <div className="flex gap-1 font-bold">
    //         ₹ {discountPrice === 0 ? regularPrice : discountPrice}
    //         <span className="self-end text-sm text-gray-500">per night</span>
    //       </div>
    //       {discountPrice !== 0 ? (
    //         <span className="size-8 text-sm">
    //           <img src="static\images\offer.png" alt="" />
    //         </span>
    //       ) : (
    //         ""
    //       )}
    //     </p>
    //   </div>
    // </div>

    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img
        src={thumbNailUrl}
        alt="Hotel Image"
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6 bg-card text-card-foreground">
        <div className="flex flex-col gap-5 lg:flex-row items-center justify-between mb-4">
          <h3 className="sm:text-lg font-semibold">{name}</h3>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon
                key={index}
                className={`w-5 h-5 ${
                  index < hotelRating
                    ? "fill-primary"
                    : "fill-muted stroke-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex md:flex-row flex-col  items-center gap-2">
          <p className="text-muted-foreground">₹{price} / night</p>
          {/* <p className="text-slate-400 line-through">₹{regularPrice}/night</p> */}
          {/* <Button variant="secondary" size="sm">
            Book Now
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default HomeCard;
