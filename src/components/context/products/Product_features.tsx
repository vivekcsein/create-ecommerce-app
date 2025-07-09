import React from "react";
import Animated_card from "@/components/wrappers/Animated_card";
import { specificationDetails } from "@/types/products";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn/tabs";

interface Product_featuresProps {
  category: string[];
  details: specificationDetails;
}

const Product_features = ({ category, details }: Product_featuresProps) => {
  console.log(category);

  const detailsArray = [
    details.colors
      ? { featureName: "colors", featureValues: details.colors }
      : undefined,
    details.material
      ? { featureName: "material", featureValues: details.material }
      : undefined,

    details.pages
      ? { featureName: "pages", featureValues: details.pages }
      : undefined,

    details.sizes
      ? { featureName: "sizes", featureValues: details.sizes }
      : undefined,
  ].filter((item) => item !== undefined);

  return (
    <Tabs defaultValue={detailsArray[0].featureName} className="w-full">
      <TabsList className="grid grid-cols-3 bg-background/50 gap-2">
        {detailsArray.map((item, index) => (
          <TabsTrigger
            key={index}
            value={item.featureName}
            className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            {item.featureName}
          </TabsTrigger>
        ))}
      </TabsList>

      <Animated_card variant="rainbow" width={2}>
        {detailsArray.map((item, index) => (
          <TabsContent
            key={index}
            value={item.featureName}
            className="border p-4 bg-background"
          >
            <h1>{item.featureValues}</h1>
          </TabsContent>
        ))}
      </Animated_card>
    </Tabs>
  );
};

export default Product_features;
