import { Title } from "solid-start";
import PrimitivesTable from "~/components/Primitives/PrimitivesTable";
import solidSquaresImg from "~/assets/img/solid-squares.webp";
import DesignMaxims from "~/DesignMaxims";

export default function Home() {
  return (
    <main class="py-[60px]">
      <Title>Solid Primitives</Title>
      <div class="p-4 sm:pt-[5vh] md:pt-[10vh] leading-7 max-w-[720px] mx-auto min-h-[50vh]">
        <p class="py-3 sm:text-lg md:text-2xl">
          A project that strives to develop high-quality, community contributed Solid primitives.
          {/* All utilities are well tested and continuously maintained. */}
        </p>
        <div class="relative mt-4 mb-10 text-[14px] sm:text-base md:text-lg">
          <ul class="flex gap-4">
            <li>
              <div class="text-[#30889c] dark:text-[#44bfdb] font-semibold">Small</div>
              <div>
                aggregate <span class="whitespace-nowrap">tree-shaking</span> benefits
              </div>
            </li>
            <li>
              <div class="text-[#3769a5] dark:text-[#5aa5ff] font-semibold">Isomorphic</div>
              <div>client and server side functionality</div>
            </li>
            <li>
              <div class="text-[#3c5098] dark:text-[#6586ff] font-semibold">Stable</div>
              <div>consistent and managed testing + maintenance</div>
            </li>
          </ul>
          <svg
            class="absolute top-[20%] -left-4 -right-4 -z-1 opacity-60 pointer-events-none mask-image-[linear-gradient(to_bottom,transparent,#000_20%)]"
            viewBox="0 0 188.975 179.46"
            // @ts-ignore
            xml:space="preserve"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style="transform: scale(1.26) translate(-27px, 12px); transform-origin: center;">
              <use
                // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(75 -27)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(115 -2)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(64 19)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(113 12)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(98 19)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(16 -21)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(1 3)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(17 12)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(62 -18)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(49 -7.5)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(34 1)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(78 -8)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(64 1)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(49 9.5)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(93.3 0.5)"
              />
              <use // @ts-ignore
                xlink:href="#solid-blocks-header-cluster-e"
                transform="translate(79 9.5)"
              />
            </g>
          </svg>
          {/* <img
            class="absolute top-[20%] left-0 right-0 bottom-0 -z-1 opacity-70 object-cover"
            src={solidSquaresImg}
            alt=""
          /> */}
        </div>
      </div>
      <PrimitivesTable />
      <div class="max-w-[864px] mx-auto leading-7 mt-[125px]">{/* <DesignMaxims /> */}</div>
    </main>
  );
}
