import './home.css' 
import VideoBox from './videoBox'
import Accordion from './accordion'
import { useState } from 'react';
function Home(){
  const fullData = localStorage.getItem('finalData');
  const userData = JSON.parse(fullData);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  console.log(userData);

  // Profile conditions
  const age = userData.profile.age;

  const isChild = age < 13;
  const isTeen = age >= 13 && age < 18;
  const isAdult = age >= 18;
  const backgrndImg = {
    kid: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/77/af41dec6a90a970217ba163937070da4_1280x720.webp?t=1748165023',
    teen: 'https://imageio.forbes.com/specials-images/imageserve/681cb3b63381f56137695445/ginny2/960x0.jpg?format=jpg&width=960',
    adult: 'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/1042332/91/13/23/asset_marquee_ec24ac9f-9bed-4d8f-97a3-6236b1fcdb85.jpg'
  }



  return <main>
<div
  style={{
    backgroundImage: isChild
      ? `url(${backgrndImg.kid})`
      : isTeen
      ? `url(${backgrndImg.teen})`:
      isAdult ? `url(${backgrndImg.adult})` : 'none',
  }}
  className="hero-section"
>
      <div className="filter"></div>
    <div className="inner-hero-box">
    <nav class="home-navbar">
      <div className="navbox for-mobile">
        <div className="n-logo">N</div>

        <div className="topright">
        <img width="34" height="34" src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFFFF/external-airplay-essential-ui-v2-creatype-outline-colourcreatype.png" alt="external-airplay-essential-ui-v2-creatype-outline-colourcreatype"/>
          <div className="profile-image">
            <img src={localStorage.getItem('Image')} alt="" />
          </div>
        </div>
      </div>
      <div className="navbox">
      <div class="navbar-left">
        <div className='hide'>
             <svg className='netflix-icon' viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg>
        </div>
        <ul>
          <li className='hide'>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li className='hide'>New &amp; Popular</li>
          <li className='hide'>My List</li>
          <li className='hide'>Browse by Languages</li>
          <li className='for-mobile'>Categories<img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M137.4%20374.6c12.5%2012.5%2032.8%2012.5%2045.3%200l128-128c9.2-9.2%2011.9-22.9%206.9-34.9s-16.6-19.8-29.6-19.8L32%20192c-12.9%200-24.6%207.8-29.6%2019.8s-2.2%2025.7%206.9%2034.9l128%20128z'/%3e%3c/svg%3e" alt=""/></li>
          </ul>
      </div>
      <div className="navbar-right">
            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='16'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M416%20208c0%2045.9-14.9%2088.3-40%20122.7L502.6%20457.4c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L330.7%20376c-34.4%2025.2-76.8%2040-122.7%2040C93.1%20416%200%20322.9%200%20208S93.1%200%20208%200S416%2093.1%20416%20208zM208%20352a144%20144%200%201%200%200-288%20144%20144%200%201%200%200%20288z'/%3e%3c/svg%3e" class="icons" alt="" />
            <p>Children</p>
            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M224%200c-17.7%200-32%2014.3-32%2032V51.2C119%2066%2064%20130.6%2064%20208v25.4c0%2045.4-15.5%2089.5-43.8%20124.9L5.3%20377c-5.8%207.2-6.9%2017.1-2.9%2025.4S14.8%20416%2024%20416H424c9.2%200%2017.6-5.3%2021.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5%20322.9%20384%20278.8%20384%20233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0%2096c61.9%200%20112%2050.1%20112%20112v25.4c0%2047.9%2013.9%2094.6%2039.7%20134.6H72.3C98.1%20328%20112%20281.3%20112%20233.4V208c0-61.9%2050.1-112%20112-112zm64%20352H224%20160c0%2017%206.7%2033.3%2018.7%2045.3s28.3%2018.7%2045.3%2018.7s33.3-6.7%2045.3-18.7s18.7-28.3%2018.7-45.3z'/%3e%3c/svg%3e" class="icons" alt="" /><div class="navbar-profile">
            <div className="profile-image">
            <img src={localStorage.getItem('Image')} alt="" />
          </div><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M137.4%20374.6c12.5%2012.5%2032.8%2012.5%2045.3%200l128-128c9.2-9.2%2011.9-22.9%206.9-34.9s-16.6-19.8-29.6-19.8L32%20192c-12.9%200-24.6%207.8-29.6%2019.8s-2.2%2025.7%206.9%2034.9l128%20128z'/%3e%3c/svg%3e" alt=""  onClick={toggleDropdown} className={`dropdown-icon ${isDropdownVisible ? 'rotate' : ''}`}/>{isDropdownVisible && (
        <div className="navbar-dropdown">
        <div className="user-info">
          <p>
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/user.png" 
              alt="Name Icon" 
              style={{ width: '16px', marginRight: '8px' }} 
            />
            {userData?.user?.firstName || 'Guest'} {userData?.user?.lastName || ''}
          </p>
          <p>
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/email.png" 
              alt="Email Icon" 
              style={{ width: '16px', marginRight: '8px' }} 
            />
            {userData?.user?.email || 'Not provided'}
          </p>
          <p>
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/age.png" 
              alt="Age Icon" 
              style={{ width: '16px', marginRight: '8px' }} 
            />
            {userData?.profile?.age || 'Unknown'}
          </p>
        </div>
      </div>
      )}
          
              </div>
      </div>
      </div>
    </nav>

    {isChild && <div className="navbox">
    <div className="movie-info">
      <div className="image">
        <img height="140px" src='https://github.com/starfall218/Netflix-_Home_Page/blob/main/Lilo_%26_Stitch_2025_film_logo.png?raw=true' alt="" />
      </div>
      <p class="hero-para">The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.</p>
      <p className='genre'>Family . Adventure</p>

      <div className="hero-btn">
        <button className='info-btn for-mobile'>
          <div className="plus">+</div>
          My List
        </button>
        <button className='play-btn'><img className='hero-icons' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2dQWoUQRSGPxEjgoIb0aWudRMPEE+RrUuvIN5AUYwuvYJXmLlAsk+vJzBmofRCyKZHnCeBEkREEq3qV/Xq/+DfV30UM/13v5kGIYQQQgghhAjKDvAKOAW+AAfAHe9FReQlYL/lK/ACuOG9uEic/kH0z6yBZ8BV70VGwC6QAdj3XmgPoi1lAex6L7gH0QZsgY/AA++FRxdtKRPwHrjtvYHooi1lBJ4D1703El20payAp8AV7w1FF20ph8Ce96Z6EG2/XKE88t5cD6IN2AAfgLvem4wu2lLOUtW/RcfYjFn3XOnNIUOPld4cs+yp0ptztr1UeqskU/RKb5VljFrprdKsolV6qzxHUSq9NZJF65XeGsq3VOnv0SDWYM5arPTWcNYtVXoLkKGFSm+BsgQeUykWLNtaK70FzVRbpbfgGWup9NZJTrwrvXWWI+CJRBO30lvH2QDv0jC+RFNe+BuJZpaTff6TEp1oJJooea0TTfEvw7fANYmmmGRd3lH2FKuwUFawKjhlBeumEmUF6zYpZQXrxj+dT6dagAx6OEtRwRo3oKxgDdBQVrBGwij/OawhR8oKDvNLXKs0K++n1rmxyjLWMoeRG6skU22TRbnxFrytdVYuN56SlzVX5tx4CB5aqMy5mVPwuqUJ/dzMWZlv0jElBW/0xyjlRS+Ah44HqDpyCz6MUplzk0vwKlplzs3/Ch6jVubc/KvgKXplzs1lBX9Plfm+98Jb47JXErveC26Viwg+7rEy5+bTXwR3XZlzo5cpzMROkn1+sj/r9SBCCCGEEEIIQXv8AGMxL6IG0qwhAAAAAElFTkSuQmCC" alt="" />Play</button>
        <button className='info-btn'><img className='hero-icons'  src="data:image/png;base64,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" alt="" /><span><span className='for-mobile'>More</span> Info</span></button>
      </div>
    </div>
    </div>}


{/* For kids */}
      {isChild && <section className='shows-sect'>
    <h3 className='sect-title'>Popular On Netflix</h3>
    <div className="popular-shows">
  <VideoBox movieImage="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/aaaabc0wft96uglladngv5stxheczr_jlullmog-tmffqv0mazqxlpxqaidv_oxazyya4htaubuy9s6g42dbpgbiptasgxfxohhfdgla.jpg" movieName="Bluey" />
  <VideoBox movieImage="https://www.hollywoodreporter.com/wp-content/uploads/2013/07/sam-cat.jpg?w=1440&h=810&crop=1" movieName="Sam & Cat" />
  <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60Cjlnt5B0qqdxna-iCy-UTZw6AKlo3Ai-A&s" movieName=" Boss Baby: Family Business" />
  <VideoBox movieImage="https://comicbook.com/wp-content/uploads/sites/4/2024/04/5f5e8144-114b-40fc-93c9-e83c19ef8e88.jpg?w=1200" movieName="Inside Out" />
  <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWM8e20FmLGgww6J74g1j6FUtmrjv2zX3_8l_GdbvLLWl61TzKzcPyZ2wpYERofhGw70&usqp=CAU" movieName="Matilda 2" />
 
 
  <VideoBox movieImage='https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/8838/808838-i' movieName='Frozen '/>
  <VideoBox movieImage='https://image.tmdb.org/t/p/w500/xhX65APD8mw5XuBbnHXpCbR4Tf0.jpg' movieName='Wizards of Waverly Place'/>

  <VideoBox movieImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAarXyKiOg3YIAjrs7CH4vThaYCq88v0gCUg&s' movieName='Despicable ME 4'/>
   </div>
  </section>}


   {isChild && <section className='shows-sect'>
    <h3 className='sect-title'>{userData.user.firstName}</h3>
   <div className="popular-shows">
  <VideoBox movieImage="https://www.hollywoodreporter.com/wp-content/uploads/2024/12/Bluey-S1_Iconics2_Ludo-Studio.jpg?crop=0px%2C304px%2C2048px%2C1146px&resize=2000%2C1126" movieName="Bluey" />
  <VideoBox movieImage="https://cdn.prod.website-files.com/63f8ef5c5a8680f76905bcd2/64a27bb5fa8e6bfde362140f_ForKids-Paw-Patrol.webp" movieName="Paw Patrol" />
  <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRgp-Ez3zzjn3FWYrvMaavZu-dQYY8yL-SA&s" movieName="Dora the Explorer" />
  <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj32jLrfejAwkY5QrN1JJFIqckS_1djds0g&s" movieName="Curious George" />
  <VideoBox movieImage="https://modernparenting-onemega.com/wp-content/uploads/2022/07/If-You-Want-a-Break-from-CoComelon-Check-Out-Songs-for-Littles.jpg" movieName="Songs for Littles with Miss Rachel" />
 
 
  <VideoBox movieImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomPi0XQaylN69PzopnDBGA8wosr92Ik8Tow&s' movieName='Dragon Ball Z '/>
  <VideoBox movieImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIv6YpELl4UCJLttixyyuAVGfK1okaqIuow&s' movieName='Spidey And His Amazing Friends'/>
  <VideoBox movieImage='https://image.tmdb.org/t/p/w500/xhX65APD8mw5XuBbnHXpCbR4Tf0.jpg' movieName='Wizards Of Waverly Place'/>
  <VideoBox movieImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAarXyKiOg3YIAjrs7CH4vThaYCq88v0gCUg&s' movieName='Despicable ME 4'/>
   </div>
   </section>}

{/* Teen */}
   {isTeen && <div className="navbox">
    <div className="movie-info">
      <div className="image">
        <img src='https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcJjIM7LYp6CtUE-frkkeFs796bxnKB1McN6A37eujfdz2442BpR8Zt0gK2Gl_pav8-tUhewsrOZKyNqeSaEt5J-_ZLGePMlmLvQCSpuUMJAiP1D7iVC2Cd59j5W5eD720hGYwmkdtt9xogbiC9nym6R4TGFoC_rKJINu41qPHA1As5jZ3eetA.png?r=684' alt="" />
      </div>
      <p class="hero-para">Ginny & Georgia is a television drama series that follows fifteen-year-old Ginny Miller as she navigates life feeling more mature than her vibrant thirty-year-old mother, Georgia. Set in picturesque New England, the series explores themes of family, identity, and the shadows of Georgia's past threatening their quest for normalcy.</p>
      <p className='genre'>Comedy . Drama . Crime</p>

      <div className="hero-btn">
        <button className='info-btn for-mobile'>
          <div className="plus">+</div>
          My List
        </button>
        <button className='play-btn'><img className='hero-icons' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2dQWoUQRSGPxEjgoIb0aWudRMPEE+RrUuvIN5AUYwuvYJXmLlAsk+vJzBmofRCyKZHnCeBEkREEq3qV/Xq/+DfV30UM/13v5kGIYQQQgghhAjKDvAKOAW+AAfAHe9FReQlYL/lK/ACuOG9uEic/kH0z6yBZ8BV70VGwC6QAdj3XmgPoi1lAex6L7gH0QZsgY/AA++FRxdtKRPwHrjtvYHooi1lBJ4D1703El20payAp8AV7w1FF20ph8Ce96Z6EG2/XKE88t5cD6IN2AAfgLvem4wu2lLOUtW/RcfYjFn3XOnNIUOPld4cs+yp0ptztr1UeqskU/RKb5VljFrprdKsolV6qzxHUSq9NZJF65XeGsq3VOnv0SDWYM5arPTWcNYtVXoLkKGFSm+BsgQeUykWLNtaK70FzVRbpbfgGWup9NZJTrwrvXWWI+CJRBO30lvH2QDv0jC+RFNe+BuJZpaTff6TEp1oJJooea0TTfEvw7fANYmmmGRd3lH2FKuwUFawKjhlBeumEmUF6zYpZQXrxj+dT6dagAx6OEtRwRo3oKxgDdBQVrBGwij/OawhR8oKDvNLXKs0K++n1rmxyjLWMoeRG6skU22TRbnxFrytdVYuN56SlzVX5tx4CB5aqMy5mVPwuqUJ/dzMWZlv0jElBW/0xyjlRS+Ah44HqDpyCz6MUplzk0vwKlplzs3/Ch6jVubc/KvgKXplzs1lBX9Plfm+98Jb47JXErveC26Viwg+7rEy5+bTXwR3XZlzo5cpzMROkn1+sj/r9SBCCCGEEEIIQXv8AGMxL6IG0qwhAAAAAElFTkSuQmCC" alt="" />Play</button>
        <button className='info-btn'><img className='hero-icons'  src="data:image/png;base64,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" alt="" /><span><span className='for-mobile'>More</span> Info</span></button>
      </div>
    </div>
    </div>}

    {/* For Teen */}
    {isTeen && <section className="shows-sect">
  <h3 className="sect-title">Teen Picks</h3>
  <div className="popular-shows">
    <VideoBox movieImage="https://seattlespectator.com/wp-content/uploads/2020/05/Never-Have-I-Ever.jpg" movieName="Never Have I Ever" />
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6lX4nDwOK4sRvY2o5iq7jOIdpx4JBZ_9Dfg&s" movieName="Cobra Kai" />
    <VideoBox movieImage="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/16684697/st11.jpg?quality=90&strip=all&crop=12.5%2C0%2C75%2C100&w=2400" movieName="Stranger Things" />
    <VideoBox movieImage="https://railernews.org/wp-content/uploads/2023/09/sitp-cast-photos-1200x600.jpeg" movieName="The Summer I Turned Pretty" />
    <VideoBox movieImage="https://hips.hearstapps.com/hmg-prod/images/outerbanks-302-unit-02925rc-1676998144.jpg=" movieName="Outer Banks" />
    <VideoBox movieImage="https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABb1c08Id25aEHwLRpyfGPYTPWq4UO5qBrQQiTxbbNasafHZMhoychnJiUTNXTtK3lNcmA45EJWoB3DZ6xWuPZeALUvWpENJ764mN.jpg?r=980" movieName="13 Reasons Why" />
    <VideoBox movieImage="https://www.tvguide.com/a/img/resize/3e1b62b0f61d7067eaee841ba9cd3f1c39dc5677/catalog/provider/1/2/1-12329642799.jpg?auto=webp&fit=crop&height=675&width=1200" movieName="Ginny & Georgia" />
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_yaXJLdz0i0xBomP951fG3mvckA9m0bcgQ&s" movieName="Kaleidoscope" />
    
<VideoBox
  movieImage="https://m.media-amazon.com/images/M/MV5BMGEyZGQ5ZGUtZGQyMy00OTU1LWE2YjUtY2VhNWI5NWYzNmJlXkEyXkFqcGc@._V1_.jpg"
  movieName="Glow Up (Makeup Show)"
/>
<VideoBox
  movieImage="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQVYKJGqNsN1FJHchCwd2juSb-H794er2TyAAchOpGZZ6cU0aLTYOJTmMT9OQPjzjv6eVPuBqGI8pmA7IjBBQpES2KQcnO9rWyFpBYlpzpn19liaV13ihVrHxL2qcpuaoFx9hsBBFrK_-zVVpvS2vyu21erA.jpg?r=c83g"
  movieName="Next in Fashion"
/>
<VideoBox
  movieImage="https://image.tmdb.org/t/p/original/your-heartstopper-poster.jpg"
  movieName="Heartstopper"
/>

  </div>
</section>
}
{isTeen && (<section className="shows-sect">
  <h3 className="sect-title">Binge-worthy Picks for You</h3>
  <div className="popular-shows">
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPivlzqwRET4vajItrn6qEE_iem36vw-78sg&s" movieName="Lockwood & Co (Supernatural)" />
    
    <VideoBox movieImage="https://i.redd.it/nzaxcg4oak8b1.jpg" movieName="The Flash (Action/Adventure)" />
    
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJAEVG4FzMlZ4wGafaO0GCPHjMcUGgweRkQ&s" movieName="The Society (Mystery/Drama)" />
    
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPdH0oqJNBezIquN5JJl-6p4fqvLaBKVVRGNuJMciZcLWPht6B4eyotB9oERIcRGFm4g&usqp=CAU" movieName="Julie and the Phantoms (Musical)" />
    
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51c-yt7wsm1v4Y8Q8fH2doKDcXv8KY-OJMumKrvMm9IknWIVcywBY2X-2oaWx8U2E7kQ&usqp=CAU" movieName="Ragnarok (Fantasy/Scandinavian Myth)" />
    
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEI4LOUv5yCmaTMogvgp5TPRYbmHiKL3Esw&s" movieName="Zero Chill (Ice Skating/Sports)" />
    
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcTz8Y4rp5tIHesuC0mkwLuzEn8pGR7spXw&s" movieName="Raising Dion (Superhero/Sci-fi)" />
    
    <VideoBox movieImage="https://m.media-amazon.com/images/M/MV5BMjY2OGFhZDYtYzBkZi00NTdjLThkZGItM2I3NGQzMTU4NDM1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg" movieName="Kipo and the Age of the Wonderbeasts (Animated/Adventure)" />
    
    <VideoBox movieImage="https://bloody-disgusting.com/wp-content/uploads/2022/06/imper.png" movieName="The Imperfects (Teen Mutants/Sci-fi)" />
    
    <VideoBox movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1cfsJN3JQlrAa3DlFKy0PnLyDWwPmq5pXTwTtCOcUMRAt250TaezKnfxqcDvj3LQpTE&usqp=CAU" movieName="Dance 100 (Reality/Dance Competition)" />
    
    <VideoBox movieImage="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQenPM5S678oCBBcf_fQvhQJ-x-GEd_poD3vIeq08XkhjPdiGXKkI78kXP9v_K7ySWF56EElmxtkoX_Hi2dFruPmcg37fiUjeDbjlWesP8HpVYOZZV-GMpIaLyQsSBFMiOIie8gOns1oN-NH60Jz5t8cZ4mA.jpg?r=2a7" movieName="Fate: The Winx Saga (Fantasy/School Drama)" />
    
    <VideoBox movieImage="https://snworksceo.imgix.net/ttd/9b732cd6-0b30-4ca0-9c72-9f73cd278ba8.sized-1000x1000.jpg?w=800&dpr=2&ar=16%3A9&fit=crop&crop=faces" movieName="Tall Girl 1" />
    
    <VideoBox movieImage="https://hips.hearstapps.com/hmg-prod/images/akp4-1589550637.jpg?crop=1xw:0.5625xh;center,top&resize=1200:*" movieName="Alexa & Katie (Comedy/Teen Life)" />
    
   
    
    <VideoBox movieImage="https://fangirlish.com/wp-content/uploads/2020/02/expandinguniverse.jpg" movieName="The Expanding Universe of Ashley Garcia (Teen Genius/Sitcom)" />
  </div>
</section>)}


{isAdult && <div className="navbox">
    <div className="movie-info">
      <div className="image">
       
      </div>
      <p class="hero-para">SURVIVOR returns with a bold new group of competitors, inspired gameplay and momentous tribal councils.</p>
      <p className='genre'>Reality . Adventure</p>

      <div className="hero-btn">
        <button className='info-btn for-mobile'>
          <div className="plus">+</div>
          My List
        </button>
        <button className='play-btn'><img className='hero-icons' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2dQWoUQRSGPxEjgoIb0aWudRMPEE+RrUuvIN5AUYwuvYJXmLlAsk+vJzBmofRCyKZHnCeBEkREEq3qV/Xq/+DfV30UM/13v5kGIYQQQgghhAjKDvAKOAW+AAfAHe9FReQlYL/lK/ACuOG9uEic/kH0z6yBZ8BV70VGwC6QAdj3XmgPoi1lAex6L7gH0QZsgY/AA++FRxdtKRPwHrjtvYHooi1lBJ4D1703El20payAp8AV7w1FF20ph8Ce96Z6EG2/XKE88t5cD6IN2AAfgLvem4wu2lLOUtW/RcfYjFn3XOnNIUOPld4cs+yp0ptztr1UeqskU/RKb5VljFrprdKsolV6qzxHUSq9NZJF65XeGsq3VOnv0SDWYM5arPTWcNYtVXoLkKGFSm+BsgQeUykWLNtaK70FzVRbpbfgGWup9NZJTrwrvXWWI+CJRBO30lvH2QDv0jC+RFNe+BuJZpaTff6TEp1oJJooea0TTfEvw7fANYmmmGRd3lH2FKuwUFawKjhlBeumEmUF6zYpZQXrxj+dT6dagAx6OEtRwRo3oKxgDdBQVrBGwij/OawhR8oKDvNLXKs0K++n1rmxyjLWMoeRG6skU22TRbnxFrytdVYuN56SlzVX5tx4CB5aqMy5mVPwuqUJ/dzMWZlv0jElBW/0xyjlRS+Ah44HqDpyCz6MUplzk0vwKlplzs3/Ch6jVubc/KvgKXplzs1lBX9Plfm+98Jb47JXErveC26Viwg+7rEy5+bTXwR3XZlzo5cpzMROkn1+sj/r9SBCCCGEEEIIQXv8AGMxL6IG0qwhAAAAAElFTkSuQmCC" alt="" />Play</button>
        <button className='info-btn'><img className='hero-icons'  src="data:image/png;base64,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" alt="" /><span><span className='for-mobile'>More</span> Info</span></button>
      </div>
    </div>
    </div>}


{/* For Adult */}
{isAdult && (
  <section className="shows-sect">
    <h3 className="sect-title">Popular On Netflix</h3>
    <div className="popular-shows">
      <VideoBox
        movieImage="https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcSnFM_V_mWxOvdPn8vTB2rispevVWyYGj7IocNaEZBzvbvFIn6KzJZiFFV3JHVth9X_4wJ5ukU3_Wm0RCh_Aj2dqoy6LeacObX8.jpg?r=f43"
        movieName="The Crown (Drama)"
      />
      
      <VideoBox
        movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIhThuZYgg3RGX14v7kQKvrdOxqeJc53SYQ&s"
        movieName="Breaking Bad (Crime/Drama)"
      />
      <VideoBox
        movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslxPziDNVFXdcVIAHZddeCaeLOxDTK0riXcHKyBR166vfdjLtknuae7fSbRnmQBHMz2k&usqp=CAU"
        movieName="Ozark (Thriller)"
      />
      <VideoBox
        movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMDA9RTxJb9CoLrQC1SEDf1AAFXZs0owpzQ&s"
        movieName="Money Heist (Crime)"
      />
      <VideoBox
        movieImage="https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABatnArMnjIw8zOWJMyp1jk7-W93FRBH8A3j48gE5dJ2EIYD0KhdKwJ7NfaZ-pFuYuPh4aZswaI4QaGUMv_jWZUUtc3TPfgkjPQe9.jpg?r=3b4"
        movieName="Narcos (Crime/Drama)"
      />
      <VideoBox
        movieImage="https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABU7gpMAYfvyueawBTChK__g2nos9dYiy4OW7GztXMmRA5gyDCLovfugu5n_mSxXJPNaiHgNPIg3hLLuOqtIBFvfX9htxXvCpYDaT.jpg?r=3ec"
        movieName="The Witcher (Fantasy)"
      />
      <VideoBox
        movieImage="https://cdn.webshopapp.com/shops/268192/files/433182623/the-peaky-blinders.jpg"
        movieName="Peaky Blinders (Crime/Drama)"
      />

    </div>
  </section>
)}

{isAdult && (
  <section className="shows-sect">
    <h3 className="sect-title">{userData?.user?.firstName || 'Popular for Adults'}</h3>
    <div className="popular-shows">
      <VideoBox
        movieImage="https://resizing.flixster.com/WYGkuADpWqzghi7-XhcOiR_4d8Y=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14652182_i_h10_ab.jpg"
        movieName="Dark (Sci-fi/Thriller)"
      />
      <VideoBox
        movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuwTHOCV9pMlqKf6sUQVhm5BJT4xZlhKQBRQSXh8LkebvE2fz5y5Xumf7nxPAUD8G-PU&usqp=CAU"
        movieName="The Queen's Gambit (Drama)"
      />
      <VideoBox
        movieImage="https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABWys8gyF3jeP0QU4gISjN1V8m3yR4VeeEqOubvXbn7DayN3EDVtyoBMB8xwe5xHEyzBhw_f7eyadTYD8RIeMjzoufvpwGJ7Ruuzl.jpg?r=992"
        movieName="Mindhunter (Crime/Thriller)"
      />
      <VideoBox
        movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ0u9gbKr1N0vbeo4mFoMVXQHpiJ5sNiTKDGIrDZqfhO6wLrCefdpccOhhSf0B66LugI&usqp=CAU"
        movieName="Black Mirror (Sci-fi/Anthology)"
      />
      <VideoBox
        movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aRmBmbXTON_97C_WqV-a5hWXCI_GiDURmg&s"
        movieName="The Haunting of Hill House (Horror)"
      />
      <VideoBox
        movieImage="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQXJdG5TvK8iEeLKwx53ME2gqiT_Ydcgzf_st0pL9fKOqEjU3cDGSfqyfXb5ra9yms-W58nXx92cwyewVRc0yS7K4d75iiMfdBJL0tDgJnKwEuXD7s1hZTEwhbqJ3STsGatMBPcmA4yqNwvrhj3gJ1Xqztdg.jpg?r=2fd"
        movieName="You (Psychological Thriller)"
      />
      <VideoBox
        movieImage="https://imageio.forbes.com/specials-images/imageserve/66ac219bf38502ff32cfc56b/the-umbrella-academy-netflix-cast-season-4/960x0.jpg?format=jpg&width=960"
        movieName="The Umbrella Academy (Superhero)"
      />
      <VideoBox
        movieImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwbGj9zuYypXzHFOE8gEWK9ftlZMBkYA_1Q&s"
        movieName="Lucifer (Fantasy/Crime)"
      />
      <VideoBox
        movieImage="https://resizing.flixster.com/Tg1UtIZF4XxqHsPiL-8f_b0vYLU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12510467_i_h9_ae.jpg"
        movieName="The Good Place (Comedy/Fantasy)"
      />
    </div>
  </section>
)}

   <footer>
      <div className="accordion-box">
        <Accordion/>
      </div>
      <div class="footer"><div class="footer-icons"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR4nO3YP2rUQRzG4RFJYyeIuhewtdAbaLedvXgDCzurxcIDiK3gAWIRFnICG0ELe7FQ2EIEEQQj/nss3EKCkMBvs5OZeZ8TzO/74Q1JSomIiIiIhuEc5niAPbzGB3zx1w98wke8xRu8wkvs4yke4m7tb2kKbmIXX21I7W9qAq7h+aaOngDHhDO4j+9OyHHfMhycxZOTOnwCHAGPbMFR7xgSbm/j+AnwH7i8/hUyAWrA420dPws4BBdxkACV4N42j58FHLL+V0EC1IAL+JUAleDWto+fH0H/WP9nMwFqwbMNXP9g/Rf0DVzCTrUPag1eTDz+O1yp/R3NwvsJx/+J67W/oWn4PCHAXu33Nw/fJgS4U/v9zcPvCQGu1n5/80xzvvb7Rw+wU/v9zTNB7bd3QQIkwNBkAQkwNFlAAgxNFpAAQ5MF1D1iJavSE+1Zlp5oz6L0RHvmpSfaMys90ZZV6Y22LEtvtGVReqMt89IbbZmV3mjHqvRIO5alR9qxKD3SjnnpkXbMat/q1DFB7bd3QQIkwNBkAQkwNFlAAgxNFpAAQ5MFJMDQZAEJMDRZQAIMTRaQAEOTBSTA0GQBCTA0WUACDE0WkABDkwUkwNBkAQkwNFlAAgxNFpAAQ5MFJMDQZAERERERpU9/AMcmPt/3CYM3AAAAAElFTkSuQmCC" alt=""/><img src="data:image/png;base64,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" alt=""/><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF80lEQVR4nO2de6gVRRzHp0x7aGX20rKnZQ8LLchSxArtCRVUF4zwUQiZkUrRg9KCNLkZlEViEUloVlREUT7KCiLIIvMWvSy1IssemmlY5jX7xI9+wuncPffs2Z2zO7M7Hzj/3MPuzu987+zMb37z+40xgUAgEAgEAoFAIBAIBAKBQEeA3YFBwATgQeB5YJl+XgUWANOAK4CDI24RsAEwDHgc2Eh8dgIfAlNsigPsBvQwZQS4GHiP9GwDZgN9UrbnPGA5cIgpE8CRwCvYZwtwg7z6GuwRFwBv6D1ejHvhtcClxnOAy4BNNJelQK867eipY9XnVdeeGceIrsA3wFbgdOMpwE3AP2TDWqBf1fMPAMZo7/wr4pqX4xoyuuKiH6of5APAVLLne2As8BDQphOBWvwJHBPXmCVVF0tv6Ws8AbgO95kQ15iDgB0RN1gFHGYcBxgMbMdtFjRi0OWd3GhN7G6WA8De2kaXkdlVtxrt7zhbA2bWueE6YIBxEGA6brNY/mki2t0HuANojTJKLqrHZnFqjEMAvXWgdBUZ6LtW+UaTgLeAv4Gvgf2jDFsR8wEyzkw0jgC04iY/AeN1uUb8kPn641fSXtMf0fl0I8gCXPfMFejoN/2Cm8gyS2eInzTG1AJYn+ChnwIDTU4Al+AvU+sZ92XCG4snehvQJTMlFOAR/GSuqQfwfsqHyPWnmQzhvx7qGw/LQmMc456x8LAdGvDpmYEY3Wo4si4zsxEDb7X44I0a0OnWREFOwB9kNnVjowae04SGyFrY9cBeTRBkKH4g09/hSQzco8HQZiPIDO52WS+zKMj5uM+mVIuzwLwM5uZPqrNUf2DLvkfb5jtjYcU0K+R1NkMCYSQQR2Z0uM+PqQRRQ9/MoeHrZG4OXAkc2sAaVikEGVon4pUFX+jaz83ACODwqF4EbMBtVqcWRA19FPfYpkJJXOFpdbCSLPdkSZstQXp6EPDxgXesCKKinKj7jwLJWZxmr2vUO/rCGMvIgdosTCqIbHD4BLhKHMSq70YCf3Ty0EBt7kmzSWAXPwNzVIh99fuBwFedPDgQzdhEguiPHjVe7NQlbtmB95wukgXiMyyNILLjLmCX3mkEecJyY8rO5lTrdcA1eVtQMF5LLEadraSBZExLJYiKIvl1ATuMsCHI2ZYaU3Z2WMsfBN7N25oC8IEVMSpCo1llHxWVu6wJoqJIsCiQnJNsC7JPip2MZWeVVTEqRBmUQRZrEZnRFEFUlDPU4wzEZ1DTBFFRhoSeksPsqo4oRwBvx29XaRmdiSAqShfgbg8yXfNC4kh7ZiZIhTD9NHsqxEb+z/TMxagSpi9wJ/BRVcPKSLvsHcvyxx+iPaN7RWWbXsDxUqhG93G5nAnbbOZkJoYKcH/TTfKXrakigwkF6efA9tJi7SyxIMqivC13kA2RSf8ZCXJymFl1YEouYlSIMqtjm0rLyupNhXkI0gP4LO9fwgHEOT7FuABwtHqlZWaqcQnJKi2x39FWWd3HGTTTqllZuy77HKcaVwH6S9oW5WGUcR3dOd+qxbiKzCzjExpdlGL2RWRZHtWOrCDvWN24/RvFYA1woPEdDWgN1iKPz0oCpBrnUxzlW+AoU0R0yX6yRxHHdT5W9o6FJv7nUSEiKZL/3t8UDa0wNNmz9Or11nceugBwrofh3ZU+1bqPhZZe8nH6uwjYzxQB3Qs8To/x8ZHWRk7LcRLZg6RH+Mz12OfYAlxtPBbgLB2kXwB+x2+WA8caV9Cq0HIASoueYjZSa5u0aEbuJC35+pIOzr74D/WQMiG35B7tq+FJTwR+pTwscd7Z03ToOQXqAVFI2Pki4xN6rsVjBRNmtR7W5dbrKUHMfLbniTor9MQ5f4WoRvbx6qD/Mf4M1k9JaNkUHa2Xda+D4drtetrmuF21vUqHFjCWsuGv51Rpbq0GwFoKs9Rh2VkcrvV15+vrrd3yCZpLdWljlKTW5W2zd+i5Hsdp3ZTR2pvu0xncPK1Mt+uzUP/+gEYWx6vDOiDqmLlAIBAIBAKBQCBgfOZflDTp+yKPSRgAAAAASUVORK5CYII=" alt=""/><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQklEQVR4nO3dW4hVVRzH8WVqaEIPWUGWD13oRnSDbhQSkYGB+RCEBWFBl4fKXsqiiw/1UgZRdAGLCqGbWG81EkF0wcpoDOyGpT2oUFN0cSLKbPrGwr+0Z+agM3utPf+91/l94DwNM/P/n9+eWfvstfbaIYiIiIiIiIiIiIiIiIiITAngUOAU4GLgKuAm4E7gQeAx4HngNeBt4BNgM7Ct8hoCfrHXr4y2u/K1+Npe+b6twKfAB8CbwCvAauAh4F7gNmAZsBg4B5gHzOj8YQEcBlxkb/SjwFp7E74F/qBbRoDvgU3AG8CzwF3AFcDxwPTQJsDBwCI7st+xo7ef/Al8BrwE3Agc5RXEHOB+O3rkf38DLwMnTmUYlwA7K0XIeH/ZuDSt6TBuAPb0KEB6iycnM5sK40ob5GRyXmwijHl2Gin1LMsdyJM1C5G9fgBm5wpjdgc/P5T7VwIs9O6kEK/mCuRu704KsT1XIM95d1KQuTkCed+7i4IsyBGILo/kc2uOM6x/MxbU755ODeQE7w4K81ZqIAu8OyjMttRArnZu4FLgc8rxT5xDSgnkDs/qw94aZtjs44+Uof5cCbDKs/Iwfmr48QIu/1+WEsgznpWH3jWdZIsUuuq6lEDWeVYe9l9bHF++oHvuSQkkLsVxEw5c30zg9h7LgdrsiZRA4jomN2Hide4bX+JZTNu9nhLIN56Vh8nXe4YtR2qzD1MCiSv/3IT6dS+2lYpttCUlkDj16CYkqIwvu2iXoZSmfu5qIPsAh7dsfNkd6gKGPSsPGQFnAe/RDnPqNhFX4BURyJjx5TvPvoCjQx3eC+NCs4vEPceX0+oWXnogw06tnV63cP3LasZxdQMpaVA/u0WD+pF1m9BpbzMO6eSKk1DmB8OR2veN6NJJI4ZTjrItOAplXlzcmRLIx56Vh4nXObdll0f2ZzAlkPWelYeJjxO/0R3rUwKJt/u6CQeewv2S7lnT2TunQu+aTu74IodHUgJ5wLPyMH6ceKqAZUArUgK5xbPyMHqh3E+UYWnqpWpPi4CvKcu5KYGc6V19gerfRWXLaySfXbXDqITye8aC+t2mHIEMendRkHU5Alnj3UVBHs4RyArvLgpyc45ALvfuoiALcwQSPyFrW6Z08T08IjkQC+WjDAX1u41ZwrBAlnp3U4BrcwYy3bZ6lXoGs2/1Bxzbh9vA5hAnz07NGsaYa1uutyh0TLzV7sJGwqiEcgzwrnenHbAx7n7daBiVUKYB19i+7DLaV8D1wEFTEkaPcM6zmcUB2/S+nz6zjFjPA/YenN/45smTBcyy9VHxyQcrgRes4M0dPSkYstoHrJeV1lvscVboOrsVYD5wAbAk7mwALAfus608VtsTFeISpA12a/bWymMndox5JEV1jn3PmK/t6PG4ig32s9fa71plv3u51bLEapuftFGMiIiIiIiIiIiIiIiIiEio4z+YVM1nFEiF0QAAAABJRU5ErkJggg==" alt=""/></div><div class="footer-menus">
        <ul className='footer-links'>
          <li>Audio Description
          <p>Help Centre</p><p>Gift Cards</p>
            </li>
           <li>Investor Relations
           <p>Media Centre</p>
           </li>
        </ul>
          <ul className='footer-links'>
          <li>Jobs
          <p>Terms of Use</p><p>Privacy</p><p>Legal Notices</p>
            </li>
            <li>Corporate Information
            <p>Cookie Preferences</p>
            <p>Contact Us</p>
              </li></ul></div>
      </div>
      <div class="footer-copyright">©2025 Netflix, Inc.</div>
    </footer>

    
    </div>
    </div>

  </main>
}
export default Home;