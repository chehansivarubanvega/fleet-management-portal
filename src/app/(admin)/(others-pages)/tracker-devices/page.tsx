import TrackerDeviceListView from '@/sections/tracker-device/tracker-device-list-view';
import type { Metadata } from 'next';


// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Tracker-Devices | Dashboard` };

export default function Page() {
  return <TrackerDeviceListView />;
}
