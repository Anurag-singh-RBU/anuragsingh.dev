import Container from "@/components/Container";
import HighlightBox from "@/components/HighlightBox";
import { AuroraText } from "@/components/magicui/aurora-text";
import ResourcesCard from "@/components/ResourcesCard";

export default function Snippets({ snippets }) {
  return (
    <Container
      title="Resources – Anurag Singh"
      description="Helpful websites that I've been using for years that have helped me in developing
      applications and much more"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h3 className="text-2xl md:text-3xl font-bungee mb-6 sm:mt-8 mt-5 text-black/80 dark:text-white" style={{wordSpacing: "6px"}}>
          <HighlightBox>Resources</HighlightBox>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 font-mono">
          Helpful{" "}
          <span className="bg-gray-100 border rounded-md px-1 py-0.5 tracking-tight dark:text-gray-300 dark:bg-gray-700">
            websites
          </span>{" "}
          that I've been using for years that have helped me in developing
          applications and much more. 🔥
        </p>

        <h3 className="text-xl md:text-2xl font-bungee mb-3 sm:mt-8 mt-5 text-black/80 dark:text-white" style={{wordSpacing: "6px"}}>
          <AuroraText>Utilities</AuroraText>
        </h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {/*  */}

          <ResourcesCard
            title="Colors and Palettes"
            link=" https://www.coolors.co/"
            websiteLink="coolors.co"
            description="Great colors and color palette inspirations"
          />
          <ResourcesCard
            title="Checkboxes Inspiration"
            link="https://getcssscan.com"
            websiteLink="getcssscan.com"
            description="Click to copy checkbox styles"
          />
          <ResourcesCard
            title="Buttons Inspiration"
            link="https://getcssscan.com/css-buttons-examples"
            websiteLink="getcssscan.com"
            description="Click to copy button styles"
          />
          <ResourcesCard
            title="Lucide Icons"
            link=" https://lucide.dev/"
            websiteLink="lucide.dev"
            description="Great icon packs from many websites."
          />
          <ResourcesCard
            title="Lookup.design"
            link="https://lookup.design/"
            websiteLink="lookup.design"
            description="Website components inspirations"
          />
          <ResourcesCard
            title="Microcopy"
            link="https://www.microcopy.me/"
            websiteLink="microcopy.me"
            description="Website copy instead of lorem ipsum."
          />
          <ResourcesCard
            title="Website Inspirations"
            link="https://www.landingfolio.com/"
            websiteLink="landingfolio.com"
            description="Beautiful and Modern Website Inspirations"
          />

          <ResourcesCard
            title="Beautiful Mockups"
            link="https://shots.so"
            websiteLink="shots.so"
            description="Beautiful Mobile and Web Mockups"
          />

          <ResourcesCard
            title="Email Templates with Tailwind"
            link="https://maizzle.com/"
            websiteLink="maizzle.com"
            description="Email Templates with Tailwind and HTML"
          />
          <ResourcesCard
            title="Tailwind Colors"
            link="https://shadyxui.in/colors"
            websiteLink="shadyxui.in"
            description="Beautiful Tailwind CSS Colors"
          />
          <ResourcesCard
            title="Remove Backgrounds"
            link="https://www.experte.com/background-remover"
            websiteLink="experte.com"
            description="Remove backgrounds - in HD"
          />
          <ResourcesCard
            title="Undesign - Free Resoureces"
            link="https://undesign.learn.uno/"
            websiteLink="undesign.learn.uno"
            description="Generate free Icons , illustrations and more"
          />
          <ResourcesCard
            title="Haikei app"
            link="https://app.haikei.app/"
            websiteLink="app.haikei.app"
            description="Generate SVG bogs and waves."
          />
          <ResourcesCard
            title="Ray"
            link="https://ray.so/"
            websiteLink="ray.so"
            description="Convert code to beautiful images"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bungee mb-3 sm:mt-10 mt-5 text-black/80 dark:text-white" style={{wordSpacing: "6px"}}>
          <AuroraText>User Interface</AuroraText>
        </h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {/* https://storyset.com/ */}
          <ResourcesCard
            title="Shadyx UI"
            link="https://shadyxui.in/"
            websiteLink="shadyxui.in"
            description="Beautiful components for frontend"
          />
          <ResourcesCard
            title="UI Gradients"
            link="https://uigradients.com"
            websiteLink="uigradients.com"
            description="Get different gradient range"
          />

          <ResourcesCard
            title="Minimal Icons Pack"
            link="https://www.heroicons.com"
            websiteLink="heroicons.com"
            description="Get free icons"
          />
          <ResourcesCard
            title="Waves & SVG blobs"
            link="https://getwaves.io/"
            websiteLink="getwaves.io"
            description="Generate waves for your website."
          />

          <ResourcesCard
            title="Color schemes"
            link="https://www.happyhues.co/"
            websiteLink="happyhues.co"
            description="Color schemes for a page"
          />
          <ResourcesCard
            title="Free Illustrations"
            link="https://lukaszadam.com/illustrations"
            websiteLink="lukaszadam.com"
            description="Free illustrations and icons"
          />
          <ResourcesCard
            title="Background generator"
            link="https://bgjar.com/"
            websiteLink="bgjar.com"
            description="Generate beautfiful backgrounds"
          />
          <ResourcesCard
            title="Avatar Library"
            link="https://limitlessdesigns.io/avatar-illustrations/"
            websiteLink="limitlessdesigns.io"
            description="Free and unique Avatars"
          />

        </div>
      </div>
    </Container>
  );
}
