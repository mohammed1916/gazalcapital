import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import decoration from '../../img/logo/GazalLogoOnly.jpg'
/* fontSize={{ xs: '20px', sm: '26px', md: '34px', lg: '46px' }} */


export default function Form() {
    function formatPhone(ph) {
        ph.replace("/([0-9]{3})/", "\x01 ");
        return ph;
    }
    return (
        <div id="#Form">
            <Box
                mx={{ xs: 3, sm: 10 }}
                my={{ xs: 2, sm: 5 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Box className="rounded-2xl" display={'flex'} flexDirection={'column'} flexWrap={'wrap'} alignItems={'center'} justifyContent='center' margin={'10px'} boxShadow={5} padding={{ xs: 1, sm: 2 }} bgcolor={'#fed812'}>
                        <div class="flex items-center justify-center p-12">
                            <div class="mx-auto w-full max-w-[550px]">
                                <form action="https://formbold.com/s/FORM_ID" method="POST">
                                    <div class="-mx-3 flex flex-wrap">
                                        <div class="w-full px-3 sm:w-1/2">
                                            <div class="mb-5">
                                                <label
                                                    for="fName"
                                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fName"
                                                    id="fName"
                                                    placeholder="First Name"
                                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                            </div>
                                        </div>
                                        <div class="w-full px-3 sm:w-1/2">
                                            <div class="mb-5">
                                                <label
                                                    for="lName"
                                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lName"
                                                    id="lName"
                                                    placeholder="Last Name"
                                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-5">
                                        <label
                                            for="phone"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"
                                            onchange="value=formatPhone(value);"
                                            placeholder="Enter your phone number"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5">
                                        <label
                                            for="email"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5">
                                        <label
                                            for="address"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Delivery Address
                                        </label>
                                        <input
                                            type="address"
                                            name="address"
                                            id="address"
                                            placeholder="Enter your delivery address"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Box>
                </Container>
            </Box >
        </div >
    );
}