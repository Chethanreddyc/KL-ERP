import { Card, Typography } from "@material-tailwind/react";
import Sidebar from "../Sidebar";

const TABLE_HEAD = ["Name", "s1", "s2", "s3", "s4", "s5", "s6", "s7"];
 
const TABLE_ROWS = [
  {
    name: "Monday",
    s1: "C321",
    s2: "C321",
    s3: "C321",
    s4: "break",
    s5: "C321",
    s6: "C321",
    s7: "C321",
  },
  {
    name: "Tuesday",
    s1: "R203",
    s2: "C321",
    s3: "C321",
    s4: "break",
    s5: "C321",
    s6: "C321",
    s7: "C321",
  },
  {
    name: "Wednesday",
    s1: "M105",
    s2: "C321",
    s3: "C321",
    s4: "break",
    s5: "C321",
    s6: "C321",
    s7: "C321",
  },
  {
    name: "Thursday",
    s1: "C007",
    s2: "C321",
    s3: "C321",
    s4: "break",
    s5: "C321",
    s6: "C321",
    s7: "C321",
  },
  {
    name: "Friday",
    s1: "C325",
    s2: "C321",
    s3: "C321",
    s4: "break",
    s5: "C321",
    s6: "C321",
    s7: "C321",
  },
  {
    name: "Saturday",
    s1: "R305",
    s2: "C321",
    s3: "C321",
    s4: "break",
    s5: "C321",
    s6: "C321",
    s7: "C321",
  },
];
 
export default function Timetable() {
  return (
    <div className="flex">
      <Sidebar />
    <Card className="h-full w-full overflow-scroll">
    <header className="text-center py-4">
  <Typography variant="h2" className="font-black text-black">
    Academic Timetable
  </Typography>
</header>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, s1, s2, s3, s4, s5, s6 }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {s1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {s2}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {s3}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {s4}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {s5}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {s6}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {s5}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
</div>
  );
}