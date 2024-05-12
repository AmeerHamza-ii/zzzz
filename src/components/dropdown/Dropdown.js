import React, { useState } from "react";
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import "./dropdown.css";
import { filedata } from "../../Data";
import { BarChart } from "@mui/x-charts/BarChart";
const chartSetting = {
  width: 450,
  height: 350,
};
const chartSetting1 = {
  width: 1000,
  height: 350,
};
const Dropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("communication");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter the data based on the selected category
  const selectedCategoryData = filedata.find(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="outerdiv">
      <div className="innerdiv">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="selectcategory"
        >
          {filedata.map((item) => (
            <option key={item.category} value={item.category}>
              {item.category}
            </option>
          ))}
        </select>
      </div>
      <div className="charts">
        <div>
          <p>Monthly Data for {selectedCategory}:</p>
        </div>
        <BarChart
          dataset={selectedCategoryData.monthlyDataset}
          xAxis={[{ scaleType: "band", dataKey: "month", label: "Monthly" }]}
          yAxis={[
            { scaleType: "linear", dataKey: "revenue", label: "Revenue" },
          ]}
          series={[
            {
              dataKey: "revenue1",
              label: "last year Revenue",
              color: "rgba(75,192,192,1)",
            },
            {
              dataKey: "revenue2",
              label: "current year Revenue",
              color: "rgba(192,75,75,1)",
            },
          ]}
          layout="vertical" // Set layout to vertical for BarChart
          {...chartSetting}
        />
        <div>
          <p>Daily Data for {selectedCategory}:</p>
        </div>
        <BarChart
          dataset={selectedCategoryData.dailyData}
          xAxis={[{ scaleType: "band", dataKey: "day", label: "Daily" }]}
          yAxis={[
            { scaleType: "linear", dataKey: "revenue", label: "Revenue" },
          ]}
          series={[
            {
              dataKey: "revenue1",
              label: ".",
              color: "rgba(75,192,192,1)",
            },
            {
              dataKey: "revenue2",
              label: ".",
              color: "rgba(192,75,75,1)",
            },
          ]}
          layout="vertical" // Set layout to vertical for BarChart
          {...chartSetting1}
        />
      </div>
    </div>
  );
};

export default Dropdown;

// export default function Dropdown() {
//   return (
//     <Autocomplete
//     className='childCon'
//       disablePortal
//       id="combo-box-demo"
//       options={categories}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Categories" />}
//     />
//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const categories = [
//     { label: 'Prison Services' },
//     { label: 'Italian Restaurants' },
//     { label: 'Italian Restaurants' },
//     { label: 'Entertainment Industry' },
//     { label: 'Jury Consulting' },
//     { label: "Enamelware Manufacturers" },
//     { label: 'Independent Filmmaking' },
//     { label: 'Fantasy Novels Publishing' },
//     { label: 'Gun Shops' },
//     { label: 'Underground Boxing' },
//     { label: 'Fantasy Novels Publishing' },
//     { label: 'Aerospace and Defense' },
//     { label: 'Fast Food Restaurants' },
//     { label: 'Dream-Within-a-Dream Heists' },
//     { label: 'Fantasy Novels Publishing' },
//     { label: "Mental Health Facilities" },
//     { label: 'Italian Restaurants' },
//     { label: 'Computer Programming' },
//     { label: 'Samurai Schools' },
//     { label: 'Aerospace and Defense' },
//     { label: 'Real Estate Development' },
//     { label: 'Law Enforcement' },
//     { label: 'Psychiatric Hospitals' },
//     { label: "Banking and Loans" },
//     { label: 'Schools and Universities' },
//     { label: 'Coffee Roasting' },
//     { label: 'Assassination Services' },
//     { label: 'Public Bathhouses' },
//     { label: 'Military Operations' },
//     { label: 'Wild West Outlaws' },
//     { label: 'Neo-Nazi Gangs' },
//     { label: 'Space Exploration' },
//     { label: 'Nightclubs' },
//     { label: 'Cinematography' },
//     { label: 'Counseling Services' },
//     { label: 'Death Row' },
//     { label: 'Home Care Services' },
//     { label: 'Coffee Roasting' },
//     { label: 'Military Operations' },
//     { label: 'Archaeological Studies' },
//     { label: 'Real Estate Development' },
//     { label: 'Classical Music Concerts' },
//     { label: 'Crime Drama Films' },
//     { label: 'Military Hardware Manufacturing' },
//     { label: 'Time Travel Adventures' },
//     { label: 'Music Education' },
//     { label: 'Sword and Sandal Films' },
//     { label: 'Memory Manipulation Services' },
//     { label: 'Stage Magic Performances' },
//     { label: 'African Safari Tours' },
//     { label: 'Vietnam War Films' },
//     { label: 'Space Exploration' },
//     { label: 'Sunset Boulevard Studios' },
//     { label: 'Weapons Development' },
//     { label: 'Dictatorships' },
//     { label: 'Cinematography' },
//     { label: 'Government Surveillance' },
//     { label: 'Post-War Rebuilding' },
//     { label: 'Military Campaigns' },
//     { label: 'American Slavery Dramas' },
//     { label: 'Psychiatric Hospitals' },
//     { label: 'Robot Manufacturing' },
//     { label: 'Beauty Pageants' },
//     { label: 'Superhero Franchises' },
//     { label: 'Animated Fantasy Films' },
//     { label: 'Alien Lifeforms Studies' },
//     { label: 'Revenge Thrillers' },
//     { label: 'Organized Crime Syndicates' },
//     { label: 'Courtroom Drama Films' },
//     { label: 'Military Submarine Operations' },
//     { label: 'Newspaper Publishing' },
//     { label: 'Spy Thrillers' },
//     { label: 'Vertigo Treatment Clinics' },
//     { label: 'Weapons Development' },
//     { label: 'Criminal Gangs' },
//     { label: 'Scottish Independence Movements' },
//     { label: 'Child Kidnapping' },
//     { label: 'Drug Addiction Dramas' },
//     { label: 'French Romantic Comedies' },
//     { label: 'Juvenile Delinquency' },
//     { label: 'Special Education' },
//     { label: 'Taxi Driving' },
//     { label: 'Military Campaigns' },
//     { label: 'Insurance Frauds' },
//     { label: 'Memory Erasure Services' },
//     { label: 'Classical Music Composers' },
//     { label: 'Legal Dramas' },
//     { label: 'Animated Toy Manufacturing' },
//     { label: 'Wolverine Merchandising' },
//     { label: 'Military Training' },
//     { label: 'Indian Wrestling' },
//     { label: 'Sting Operations' },
//     { label: 'Space Exploration' },
//     { label: "Musicals and Dance Films" },
//     { label: 'Toy Manufacturing' },
//     { label: 'Bicycle Theft Investigations' },
//     { label: 'Orphanage Operations' },
//     { label: 'Nazi Hunting' },
//     { label: 'Jewelry Heists' },
//     { label: 'Engineering Colleges' },
//     { label: 'British Comedy Films' },
//   ];
