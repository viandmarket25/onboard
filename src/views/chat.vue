<template>
    <div class="bg-white">

        <!-- image preview -->
        <div v-if="selectedImage" class="image-preview">
      <div class="overlay" @click="cancelPreview"></div>
     
      
   <div  style="height:700px; width:400px; position:absolute;">
  <div class="flex">
    <div class="w-full">
      <div class="flex">
        <div class="w-full">
            <div style="width:400px; height:40px;  color:#f1f1f1; font-size:16px; ">

Preview
</div>

        </div>
      </div>
      <div class="flex">
        <div class="w-full">
            <div style="width:400px; height:400px;  ">
          <img :src="selectedImage" alt="Selected Image" style="border-radius:10px; margin-top:20px;" />

        </div>
        </div>
      </div>
      <div class="flex">
        <div class="chat-input" style="width:100%; border-radius:10px; ">
        <div class="file-upload- centered-position" style="width:80%; text-align:left; float:left; ">
         
          <div style="float:left;" >
            Image has been attached
          </div>
         
        </div>
       
         <div class="send-image-button" style="float:right; width:30px;" @click="uploadFile()" >
          <label >
            <img style="width:30px; height:30px;" src="/src/assets/icons/social/send-2.png" alt="Send" />
          </label>

        </div>


      </div>
      </div>
    </div>
  </div>
</div>


    </div>
    <!-- end image preview -================ -->
   
   <!-- ========== HEADER ========== -->
     <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-4 dark:bg-gray-800 dark:border-gray-700">
       <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
         <div class="flex items-center justify-between">
           <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">AnnaAI</a>
           
           <div class="sm:hidden">

            <button type="button" class="w-8 h-8 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all dark:text-gray-400 dark:focus:ring-offset-gray-800" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <!---
                <svg class="w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>

        -->
                <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>


            <span class="sr-only">Sidebar</span>
            </button>
            <!---
             <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
               <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
               </svg>
               <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
               </svg>
             </button>
            -->
           </div>
         </div>
       
       </nav>
     </header>
     <!-- ========== END HEADER ========== -->
   
<!-- Sidebar -->
<div id="application-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-slate-900 dark:border-gray-700">
  <nav class="hs-accordion-group w-full h-full flex flex-col" data-hs-accordion-always-open>
    <div class="flex items-center justify-between pt-4 pr-4 pl-7">
      <!-- Logo -->
      <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">AnnaAI</a>
           
      <!-- End Logo -->

      <!-- Sidebar Toggle -->
      <div class="lg:hidden">
        <button type="button" class="w-8 h-8 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all dark:text-gray-400 dark:focus:ring-offset-gray-800" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
          <svg class="w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
          <span class="sr-only">Sidebar</span>
        </button>
      </div>
      <!-- End Sidebar Toggle -->
    </div>

    <div  ref="scrollContainer"  class="h-full">
      <!-- List -->
      <ul class="space-y-1.5 p-4">
        <li>
          <a class="flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.47339 2 8.85714 2.38376 8.85714 2.85714V7.14286L13.1429 7.14286C13.6162 7.14286 14 7.52661 14 8C14 8.47339 13.6162 8.85714 13.1429 8.85714L8.85714 8.85715V13.1429C8.85714 13.6162 8.47339 14 8 14C7.52661 14 7.14286 13.6162 7.14286 13.1429V8.85715L2.85714 8.85715C2.38376 8.85715 2 8.4734 2 8.00001C2 7.52662 2.38376 7.14287 2.85714 7.14287L7.14286 7.14286V2.85714C7.14286 2.38376 7.52661 2 8 2Z" fill="currentColor"/>
            </svg>
            New chat
          </a>
        </li>
        <li>
          <a class="flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
            </svg>
            E-commerce
          </a>
        </li>
        <li>
          <a class="flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
            </svg>
            Social Media
          </a>
        </li>
   
        <li>
          <a class="flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
            Updates & FAQ
          </a>
        </li>
        <li>
          <a class="flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
          <svg class="w-3.5 h-3.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
            </svg>
            <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Upgrade Plan</span>
          </a>
        </li>
      </ul>
      <!-- End List -->
    </div>

    <!-- Footer -->
    <div class="mt-auto">
      <div class="py-2.5 px-7">
        <p class="inline-flex items-center gap-x-2 text-xs text-green-600">
          <span class="block w-1.5 h-1.5 rounded-full bg-green-600"></span>
          Active 12,320 people
        </p>
      </div>

      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <a class="flex justify-between items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
          Sign in
          <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
            <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
          </svg>
        </a>
      </div>
    </div>
    <!-- End Footer -->
  </nav>
</div>
<!-- End Sidebar -->

<!-- Content -->
<!-- Content -->
<div class="relative h-screen">
  <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
   

    <ul class="mt-16 space-y-5">
      <!-- Chat Bubble ::::::::::::::: bot first message -->
      <li class="flex gap-x-2 sm:gap-x-4">
        <img  src="/src/assets/images/shopgpt.png" class="comment-avatar" id="null">
                         

        <!-- Card -->
        <div class="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
          <h2 class="font-medium text-gray-800 dark:text-white">
            How can I help?
          </h2>
          <div class="space-y-1.5">
            <p class="mb-1.5 text-sm text-gray-800 dark:text-white">
              I can help you do things like:
            </p>
            <ul class="list-disc list-outside space-y-1.5 pl-3.5">
              <li class="text-sm text-gray-800 dark:text-white">
                Show you photos similar to the one you sent
              </li>

              <li class="text-sm text-gray-800 dark:text-white">
                Tell you how a writer of a text is feeling
              </li>

              <li class="text-sm text-gray-800 dark:text-white">
                Provide captions for your photo
              </li>
            </ul>
          </div>
        </div>
        <!-- End Card -->
      </li>
      <!-- End Chat Bubble -->

    


      <!-- Chat Bubble :::::::::::::: user1 audio -->
      <li class="max-w-2xl ml-auto flex justify-end gap-x-2 sm:gap-x-4">
        <div class="grow text-end space-y-3">
          <!-- Card -->
          <div class="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
            <p class="text-sm text-white">
              what's preline ui figma?
            </p>
            <div class="mt-3">
              <button type="button" class="p-2 inline-flex justify-center items-center gap-x-1 rounded-md bg-white/[.1] border border-transparent font-medium text-gray-100 hover:text-gray-600 hover:bg-white focus:outline-none focus:ring-2 ring-offset-blue-600 focus:ring-white focus:ring-offset-2 transition-all text-xs">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
                Voice message
              </button>
            </div>
          </div>
          <!-- End Card -->
        </div>

      </li>
      <!-- End Chat Bubble -->

    

      


      <!-- Chat Bubble ::::::::::; user1 sender --> 
      <li class="max-w-2xl ml-auto flex justify-end gap-x-2 sm:gap-x-4">
        <div class="grow text-end space-y-3">
          <!-- Card -->
          <div class="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
            <p class="text-sm text-white">
              what's tailwindcss?
            </p>
          </div>
          <!-- End Card -->
        </div>

        
      </li>
      <!-- End Chat Bubble -->

        <span v-for="(message, index) in messageList" :key="index" >
           
            <li v-if="!message.senderIsUserId && message.messageType==`text` " class="flex gap-x-2 sm:gap-x-4">
                <img  src="/src/assets/images/shopgpt.png" class="comment-avatar" id="null">
                <!-- Card -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                <div class="space-y-1.5">
                    <p class="mb-1.5 text-sm text-gray-800 dark:text-white">
                    {{message.comment}}
                    </p>
                  
                </div>
                </div>
                <!-- End Card -->
            </li>
             <!-- Chat Bubble ::::::::::; user1 sender --> 
            <li  v-if="message.senderIsUserId && message.messageType==`text`" class="max-w-2xl ml-auto flex justify-end gap-x-2 sm:gap-x-4">
                <div class="grow text-end space-y-3">
                <!-- Card -->
                <div style="width:100%; height:auto; float:right;"  >
                          <div style="width:78%; height:auto; float:right;" >
                            <div class="comment-content" id="null" style=" box-shadow: 0px 0px 0px 1px #f1f1f1;  ">
                              <div style="width:100%; height:auto; font-family:Poppins-SemiBold; color:#000000;  ">
                                  {{message.comment}}
                              </div>
                              <div style="width:100%; height:30px;  ">
                                <div style="width:40%; height:30px; float:left; ">
                                  <div class="time-content" style="color:#505050;" >
                                    {{message.timeDate}}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                <!-- End Card -->
                </div>

                
            </li>

            <li  v-if="message.senderIsUserId && message.messageType==`image`" class="max-w-2xl ml-auto flex justify-end gap-x-2 sm:gap-x-4">
                <div class="grow text-end space-y-3">
                <!-- Card -->
                <div style="width:100%; height:auto; float:right;" v-if="message.senderIsUserId && message.messageType==`image`"  >
                          <div style="width:78%; height:auto; float:right;"  >
                            <div class="comment-content" id="null" style=" background:none; max-width:240px; float:right; ">
                              <div style="width:100%; height:auto; font-family:Poppins-SemiBold; color:#000000;  ">
                                <div style=" ">
                                  <img :src="message.imageFile" alt="Selected Image" style="max-width:170px; max-height:170px; border-radius:4px; margin-top:20px;" />

                                </div>
                              </div>
                              <div style="width:100%; height:30px;  ">
                                <div style="width:80%; height:30px; float:left; ">
                                  <div class="time-content" style="color:#505050;" >
                                    {{message.timeDate}}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr/>
                        </div>
                <!-- End Card -->
                </div>

                
            </li>

            <li  v-if="!message.senderIsUserId && message.messageType==`products` " class="max-w-2xl ml-auto flex justify-end gap-x-2 sm:gap-x-4">
                <div class="grow text-end space-y-3">
                <!-- Card -->
                <div style="width:100%; height:auto; float:left; padding-top:20px; border-top:1px solid #f1f1f1; margin-top:10px; " >
                          <div style="width:70px; height:auto; float:left; " >
                            <img  src="/src/assets/images/shopgpt.png" class="comment-avatar" id="null">
                         
                          </div>
                          <div style="width:86%; height:auto; float:left; " >
                       
                          <div class="comment-content" id="null" style="  background:#ffffff;  ">
                            <div style="width:100%; height:auto; font-family:Poppins-SemiBold; color:#000000; ">
                              

                        <div class="product-list">

                       

                          <div class="product-card" v-for="product in message.products" :key="product.id" >
                          <div class="product-image-sm">
                            <img :src="product.image" :alt="product.name" >
                          </div>
                          
                          <div class="product-details">
                            <h3 class="product-title-" style="font-size:12px;">{{ product.name }}</h3>
                            <p class="product-price"><span style="font-size:11px; color:#404040; font-family:Poppins-Regular;">₦</span>{{ product.price }}</p>
                            <div class="tags">
                              <span class="tag"><Icon type="md-search" /> Similar</span>
                              <div class="match-bar">
                                <div :style="`width:`+getMatchPercent(product.score)+`%;`" class="match-progress"></div>
                              </div>
                              <span class="match-percentage">{{ getMatchPercent(product.score) }} % Match</span>
                            </div>
                          </div>
                        </div>




                        </div>
                            </div>
                            <div style="width:100%; height:30px;  ">
                              <div style="width:40%; height:30px; float:left; ">
                                <div class="time-content" >
                                  {{message.timeDate}}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                        </div>
                <!-- End Card -->
                </div>

                
            </li>

          
        </span>
        <li  v-if="botIsTyping" class="flex gap-x-2 sm:gap-x-4">
                <div style="width:100%; height:auto; float:left; ">
                          <div style="width:70px; height:auto; float:left; " v-if="botIsTyping" >
                            <img  src="/src/assets/images/shopgpt.png" class="comment-avatar-typing" id="null">
                            <div v-if="botIsTyping" style="float:right; margin-left:6px; top:-6px;position:relative;" class="typing-indicator">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        
                        </div>
                <!-- End Card -->
            </li>


   

  
    </ul>
  </div>

  <!-- Search -->
  <footer class="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0 dark:bg-slate-900 dark:border-gray-700">
    <div class="flex justify-between items-center mb-3">
      <button type="button" class="inline-flex justify-center items-center gap-x-2 rounded-md font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm dark:text-gray-200 dark:hover:text-blue-500">
        <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.47339 2 8.85714 2.38376 8.85714 2.85714V7.14286L13.1429 7.14286C13.6162 7.14286 14 7.52661 14 8C14 8.47339 13.6162 8.85714 13.1429 8.85714L8.85714 8.85715V13.1429C8.85714 13.6162 8.47339 14 8 14C7.52661 14 7.14286 13.6162 7.14286 13.1429V8.85715L2.85714 8.85715C2.38376 8.85715 2 8.4734 2 8.00001C2 7.52662 2.38376 7.14287 2.85714 7.14287L7.14286 7.14286V2.85714C7.14286 2.38376 7.52661 2 8 2Z" fill="currentColor"/>
        </svg>
        New chat
      </button>

      <button type="button" class="py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
        </svg>
        Stop recording
      </button>
    </div>

    <!-- Input -->
    <div class="relative">
      <textarea class="p-4 pb-12 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Ask me anything..."></textarea>

      <!-- Toolbar -->
      <div class="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900">
        <div class="flex justify-between items-center">
          <!-- Button Group -->
          <div class="flex items-center">
            <!-- create Button -->
            
            <!-- End create Button -->

            <!-- Attach Button -->
            <div class="file-upload">
            <label for="file-input">
            
                <img style="width:18px; height:18px;" src="src/assets/icons/linear/gallery-add.png">
            
            </label>
            <input type="file" id="file-input" ref="fileInput" @change="handleFileUpload" />
            </div>


            <!-- End Attach Button -->
          </div>
          <!-- End Button Group -->

          <!-- Button Group -->
          <div class="flex items-center gap-x-1">
            <!-- Mic Button -->
            <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:hover:text-blue-500">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
              </svg>
            </button>
            <!-- End Mic Button -->


            <div class="send-button" style="background:#f1f1f1; border-radius:6px; padding:4px;" @click="sendMessage" >
            <label >
                <img style="width:24px; height:24px;" src="/src/assets/icons/social/send-2.png" alt="Send" />
            </label>

            </div>
         
            <!-- End Send Button -->
          </div>
          <!-- End Button Group -->
        </div>
      </div>
      <!-- End Toolbar -->
    </div>
    <!-- End Input -->
  </footer>
  <!-- End Search -->
</div>
<!-- End Content -->
<!-- End Content -->
   
   </div>
   
   </template>

<script>

   import axios from "axios";
   import { ref, nextTick } from 'vue';
   export default {
     name: 'messagesWidget',
     props: {
       msg: String
     },
     components:{
       
     },
     mounted(){
   
       //this.checkUserExists('auto-login')
   
     },
     created() {
   
       console.log(" route query::  ",this.$route.query,"this.$route.param")
     },
     data(){
       return {
         selectedImage: null,
         selectedFile: null,
   
         botIsTyping:true,
      
         messages: [
           { id: 1, sender: 'John', content: 'Hello!' },
           { id: 2, sender: 'Jane', content: 'Hi there!' },
           { id: 3, sender: 'John', content: 'How are you?' },
         ],
         newMessage: '',
         topBarData:{
           totalProducts:0,
           userCookieData:{},
         },
   
            
           isLoggedIn: false,
         userCookieData:{},
         activePage:'messages',
         messageList:[
            {
             walletAddress:'',
             username:'Fire Beats',
             avatarUrl:'music-img-1.jpeg',
             likes:'100',
             senderIsUserId:false,
             timeDate:'9:23 AM 17th July, 2021',
             comment:'Hello dear, how may I help you today?',
             messageType:"text",
             imageFile:{},
           },
     
           
   
   
         ],
       }
     },
     methods:{
       getMatchPercent(score){
         let percentage;
   
         if (score <= 100) {
           percentage = 100;
         } else if (score >100) {
           percentage = 100 - ((score - 100) / 3900) * 100;
         } else {
           //percentage = 100 - ((score - 100) / 3900) * 100;
         }
   
         if( percentage<0){
           percentage=0
         }
   
   
         return Math.round(percentage);
   
       },
       scrollToBottom() {
         nextTick(() => {
           const container = this.$refs.scrollContainer;
           const scrollOptions = {
             top: container.scrollHeight,
             behavior: 'smooth',
             block: 'end'
           };
           container.scrollTo(scrollOptions);
         });
       },
       handleFileUpload(event) {
         const file = event.target.files[0];
         if (file) {
           this.selectedFile=file
           // Read the selected file as a data URL
           const reader = new FileReader();
           reader.onload = () => {
             this.selectedImage = reader.result;
            
           };
           reader.readAsDataURL(file);
         }
       },
       currentDate(){
         const currentDate = new Date();
         const options = { day: 'numeric', month: 'long', year: 'numeric' };
         const formattedDate = currentDate.toLocaleDateString('en-US', options);
         const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
         const formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);
         const ordinalSuffix = (date) => {
           const suffixes = ['th', 'st', 'nd', 'rd'];
           const relevantDigits = (date > 3 && date < 21) || date % 10 > 3 ? 0 : date % 10;
           return `${date}${suffixes[relevantDigits]}`;
         };
         const day = ordinalSuffix(currentDate.getDate());
         const formattedDateTime = `${day} ${formattedDate}, ${formattedTime}`;
         console.log("Formatted Date and Time:", formattedDateTime);
   
         return  formattedDateTime
       },
       updateMessageList(message){
         console.log( this.messageList)
         this.messageList=[...this.messageList, message];
         //this.messageList.push(message)
         console.log( this.messageList)
         this.scrollToBottom()
       },
       createImageMessage(file){
   
         let message={
             walletAddress:'',
             username:'Fire Beats',
             avatarUrl:'music-img-1.jpeg',
             likes:'100',
              senderIsUserId:true,
             timeDate:'9:23 AM 17th July, 2021',
             comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
             messageType:"image",
             imageFile:file,
           }
           this.messageList.push(message)
           this.scrollToBottom()
   
       },
       async uploadFile() {
         this.createImageMessage( this.selectedImage)
        
         let token //=this.$cookies.get("siteAccessT").token
         token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoxMCwidXNlcm5hbWUiOiJ0ZXN0MSIsImlkIjoyMiwiaWF0IjoxNjgxNDM3NDAxfQ.pVFPSKeuZ374OgZF-knb-CO5dVSiZwVFPgfKOGJCtWg"
         if (this.selectedFile) {
           const formData = new FormData();
           formData.append('image', this.selectedFile);
   
           try{
   
             const response = await axios({
               method: "post",
               url: 'http://127.0.0.1:8001/products/image-search',
               data:formData,
               headers: {
                 "Authorization" : `Bearer ${token}`,
                 "Access-Control-Allow-Origin": "*",
                 "Content-Type":"application/json"
                 
               },
               
               baseURL: "http://127.0.0.1:8001",
             });
             console.log(response.data)
   
             let result = response.data;
   
             if(typeof result!=null){
               this.cancelPreview() 
               let productResponse=response.data
   
               console.log(response.data)
               const currentDate = new Date();
               const formattedDateTime = currentDate.toLocaleString();
               let message={
                   walletAddress:'',
                   username:'Fire Beats',
                   avatarUrl:'music-img-1.jpeg',
                   likes:'100',
                   senderIsUserId:false,
                   timeDate:this.currentDate() ,
                   comment:'Joe is doing well here NEXT FRIDAY August 6th - Apply today!] Were looking for smart, entrepreneurial, and highly motivated people to join our ',
                   messageType:"products",
                   products:[],
   
               }
               for(let i=0; i<productResponse.length; i++){
                 console.log(typeof productResponse[i]['metadata'])
                 console.log(productResponse[i]['metadata'])
                
                 if(typeof productResponse[i]['metadata']=='string' && productResponse[i]['metadata']!=='[object Object]'){
                   let metadata=JSON.parse(productResponse[i]['metadata'])
                   let product={
                   id:productResponse[i]['id'],
                   name:metadata['product_name'].substring(0,25)+"..",
                   price: metadata['price'],
                   score:productResponse[i]['score'],
                   description:metadata['description'],
                   category:metadata['product_category'],
                   image:metadata['product_url']==""? "/src/assets/images/airpod-1.jpg":metadata['product_url']
   
                 }
                 
                 message.products.push(product)
   
                 }
             
   
               }
               this.updateMessageList(message)
   
               console.log(message)
   
               
               //this.uploadedFile = response.data;
               this.selectedFile = null;
   
   
             }
   
   
   /*
           axios.post('http://127.0.0.1:8001/products/image-search', formData, {
               headers: {
                 "Authorization" : `Bearer ${token}`,
               "Access-Control-Allow-Origin": "*",
                 'Content-Type': 'multipart/form-data',
               },
             })
             .then((response) => {
           
             })
             .catch((error) => {
             
             });
             */
   
   
   
   
           }catch(error){
             this.cancelPreview() 
               console.error(error);
   
           }
   
         }
       },
       cancelPreview() {
         this.selectedImage = null;
         // Clear the selected file in the file input element
         this.$refs.fileInput.value = '';
       },
       goModule(index,path){
         this.$router.push(path);
   
       },
       getDashboardIcons(name){
         let imgUrl;
         let page_ = window.location.href.split("/messages/s").join("");
         //page_=window.location.href.split("/")[0]
   
         if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
           imgUrl = page_ + "./src/assets/icons/dashboard-icons/" + name;
         } else {
           imgUrl = page_ + "dynamic-assets/icons/dashboard-icons/" + name;
         }
         console.log(imgUrl);
         return imgUrl;
   
         //return "@/assets/icons/dashboard-icons/"+path;
       },
       checkUserExists(type){
       let result
       if(type=='auto-login'){
         console.log('check user ')
         //window.localStorage.getItem("username") === null
         let userCookieData
         let localStoreData
         if(this.$cookies.isKey('siteAccessT') ){
           userCookieData=this.$cookies.get("siteAccessT")
           this.userCookieData=userCookieData
           //$cookies.isKey(keyName)
           // localStorage.getItem("siteAccessT") !== null
           console.log(userCookieData)
           localStoreData = JSON.parse( window.localStorage.getItem("siteAccessT"))
           this.topBarData.userCookieData=userCookieData
   
           console.log( localStoreData ,window.localStorage.getItem("siteAccessT"))
           console.log("true")
           result=1;
          // this.goUserHome();
   
         }else{
           this.$router.push('/home/')
           result=0
           console.log("false")
         }
         console.log("local storage:  ",window.localStorage.getItem("siteAccessT"),localStoreData,"user cookies: ",userCookieData )
   
   
   
       }
       return result
       },
       hideFooter(){
         let footer=document.getElementById("app-footer")
         footer.style.display="none"
   
       }, hideOverflow(){
         let vueApp=document.getElementById("vue-app")
         vueApp.style.overflowY="hidden"
          let app=document.getElementById("app")
         app.style.overflowY="hidden"
   
       },
       getMenuClass(item,index){
         console.log(item.title,index)
         return item.title.toLowerCase()==this.activePage?'top-menu-item-active':'top-menu-item';
   
       },
       getImageUrl(name) {
         let imgUrl;
         let page_ = window.location.href.split("messages/s/").join("");
         //page_=window.location.href.split("/")[0]
   
         if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
           imgUrl = page_ + "/src/assets/images/" + name;
         } else {
           imgUrl = page_ + "dynamic-assets/images/" + name;
         }
         console.log(imgUrl);
         return imgUrl;
       },
     }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>

.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

.image-preview img {
  max-width: 90%;
  max-height: 90%;
}


input[type='text']:focus,
input[type='file']:focus {
  outline: none;
}

input[type='text']::-moz-focus-inner,
input[type='file']::-moz-focus-inner {
  border: 0;
}

input[type='text']::-webkit-file-upload-button,
input[type='file']::-webkit-file-upload-button {
  cursor: pointer;
}

.file-upload {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left:10px;
  position: relative;
}

.file-upload i {
  cursor: pointer;
  color: #007bff;
  font-size: 16px;
}

.file-upload input[type='file'] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.comment-avatar {
    margin-left: 2px;
 
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    box-shadow:0 0 0 1px #f1f1f1;
    background: #bd3db9;
    position: relative;
    float: left;
}


.send-image-button{
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  margin-right:10px;
}
.chat-input {
  height:60px;
  border-top:1px solid #f1f1f1;
  display: flex;

  background:#ffffff;
  outline:none;
  gap: 8px;
}

.centered-position{
  align-items: center;
  vertical-align:middle;
  justify-content:center;
  text-align:center;
  display:flex;

}

.comment-avatar-typing {
  margin-left: 2px;
    
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: #fcfcfc;
    position: relative;
   
}

.time-content {
    font-weight: normal;
    text-align: left;
    cursor: pointer;
    white-space: normal;
    margin-top: 4px;
    color: #606060;
    overflow: wrap;
    font-size: 12px;
    padding-top: 10px;
    padding-left: 2px;
    font-family: Poppins-SemiBold;
}
.typing-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-left: 2px;
  height: 20px;
}

.typing-indicator span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 36%;
  margin-right: 4px;
  opacity: 0;
  animation: typing 1.4s infinite;
}

.typing-indicator span:nth-child(1) {
  background-color: #404040;
  opacity:0.3;
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(2) {
  background-color: #404040;
  animation-delay: 0.3s;
  opacity:0.6;
}

.typing-indicator span:nth-child(3) {
  background-color: #404040;
  animation-delay: 0.4s;
  opacity:0.8;
}
.typing-indicator span:nth-child(4) {
  background-color: #404040;
  animation-delay: 0.4s;
}

@keyframes typing {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  20% {
    opacity: 1;
    transform: translateY(-10px) scale(1);
  }
  80% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  100% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
}

</style>
   
   