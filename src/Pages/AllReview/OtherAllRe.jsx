import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/useAxious";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import SingleOthers from "./SingleOthers";

 

const OtherAllRe = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const AxiousURL = useAxious();
    const { refetch, data: MyReviews = [] } = useQuery({
      queryKey: ["MyReviews"],
      queryFn: async () => {
        const result = await AxiousURL.get("/MyReviews");
        return refetch, result.data;
      },
    });
  
const adventure = MyReviews.filter(item=> item.genre === "Adventure")
const Action = MyReviews.filter(item=> item.genre === "Action")
const RPG = MyReviews.filter(item=> item.genre === "RPG")
const Sports = MyReviews.filter(item=> item.genre === "Sports")
const Strategy = MyReviews.filter(item=> item.genre === "Strategy")
const Horror = MyReviews.filter(item=> item.genre === "Horror")


 
    return (
        <div>
              <Tabs
        className="mt-5 bg-base-300 "
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}>
        <TabList className="  text-center text-2xl cursor-pointer flex   gap-4 justify-center font-bold  ">
          <Tab>adventure</Tab>
          <Tab>Action</Tab>
          <Tab>RPG</Tab>
          <Tab>Sports</Tab>
          <Tab>Strategy</Tab>
          <Tab>Horror</Tab>
        </TabList>
        <TabPanel className="md:w-11/12">
          <SingleOthers items={adventure}></SingleOthers>
        </TabPanel>
         
         
        <TabPanel className="md:w-11/12">
          <SingleOthers items={Action}></SingleOthers>
        </TabPanel>
         
         
        <TabPanel className="md:w-11/12">
          <SingleOthers items={RPG}></SingleOthers>
        </TabPanel>
         
         
        <TabPanel className="md:w-11/12">
          <SingleOthers items={Sports}></SingleOthers>
        </TabPanel>
         
         
        <TabPanel className="md:w-11/12">
          <SingleOthers items={Strategy}></SingleOthers>
        </TabPanel>

        <TabPanel className="md:w-11/12">
          <SingleOthers items={Horror}></SingleOthers>
        </TabPanel>
         
         
         
      </Tabs>
        </div>
    );
};

export default OtherAllRe;