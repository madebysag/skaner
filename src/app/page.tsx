import { DetailsCard, Details } from "@/src/components/DetailsCard"
import { DateDivider } from "../components/DateDivider";

export default function Home() {
  return (
    <main className="max-w-md md:w-full flex flex-col items-center mx-auto">

      <DetailsCard>
          <Details
          name="Iphone 11 Pro Max"
          imei={35478941254785632456}
          battery={88}
          storage={256}
          storageUnit="GB"
          />
      </DetailsCard>
      
      <DetailsCard>
          <Details
          name="Iphone 11 Pro Max"
          imei={35478941254785632456}
          battery={88}
          storage={256}
          storageUnit="GB"
          />
      </DetailsCard>
      <DateDivider date="10 am - 12 Nov, 2026" />
    </main>
  );
}
