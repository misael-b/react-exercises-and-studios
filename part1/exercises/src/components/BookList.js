export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781649375858_p0_v7%5D&call=url%5Bfile:common/decodeProduct.chain%5D";
   let book2 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9798887100265_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D";
   let book3 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780316563789_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D";

   return (
      <div style={{ border: "1px solid" , background : "lightgrey"}}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Iron Flame by Rebecca Yaros" height={250} />
         <img src={book2} alt="Nine-Figure Mindset: How to Go from Zero to Over $100 Million in Net Worth by Brandon Dawson" height={250} />
         <img src={book3} alt="Resurrection Walk (Lincoln Lawyer Series #7) by Michael Connelly" height={250} />
      </div>      
   );
}