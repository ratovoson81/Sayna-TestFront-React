import { Activities, YesterdayActivities } from "../data/Activity";

export default function Activity() {
  return (
    <div className="ml-6">
      <div className="flex items-center justify-between">
        <div className="font-bold text-lg">Recents Activites</div>
        <button className="bg-gray-200 px-4 py-2 rounded text-xs flex items-center text-gray-700">
          View a report
        </button>
      </div>
      <div className="text-sm mt-8 text-gray-600">Today</div>
      {Activities.map((item, i) => {
        return (
          <div key={i} className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              {item.icon}
              <div className="ml-6">
                <div className="text-sm text-gray-900 font-medium">
                  {item.name}
                </div>
                <div className="text-sm text-gray-400">{item.type}</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {item.price}
              <span className="text-sm text-gray-900 font-semibold"> USD</span>
            </div>
          </div>
        );
      })}
      <div className="text-sm mt-8 text-gray-600">Yesterday</div>
      {YesterdayActivities.map((item, i) => {
        return (
          <div key={i} className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              {item.icon}
              <div className="ml-6">
                <div className="text-sm text-gray-900 font-medium">
                  {item.name}
                </div>
                <div className="text-sm text-gray-400">{item.type}</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {item.price}
              <span className="text-sm text-gray-900 font-semibold"> USD</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
