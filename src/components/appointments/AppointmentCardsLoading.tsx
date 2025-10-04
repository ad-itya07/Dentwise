import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function AppointmentCardsLoading() {
  return (
    <Card className="cursor-pointer transition-all hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          {/* Doctor image skeleton */}
          <Skeleton className="w-10 h-10 rounded-full" />

          <div className="flex-1 space-y-2">
            {/* Doctor name skeleton */}
            <Skeleton className="h-5 w-32" />
            {/* Reason skeleton */}
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-1 text-sm">
        {/* Date skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4" />
          <Skeleton className="h-4 w-24" />
        </div>
        {/* Time skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>
    </Card>
  );
}

export default AppointmentCardsLoading;
