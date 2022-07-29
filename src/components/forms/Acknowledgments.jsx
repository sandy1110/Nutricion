import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box, Paper, Typography } from '@material-ui/core';

const initialValues ={  
    agree: '',
}

export const Acknowledgments = () => {
    const [agree, setAgree] =useState(false);

    const handleAgreeChange = () => {
        setAgree(!agree);
    };

    return (
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"50%"}}>
                        <Typography variant ='h6'>
                            <b>Definitions:</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'subtitle1'>
                            ° "Lender" icnludes the Lender's agents, service providers and any of their successors and assigns.
                        <br></br>
                            ° "Other Loan Participants" includes (i) any actual or potential owners of a loan resulting from this application (the "Loan"), (ii) acquirers of any beneficial or other interest in the Loan, (iii) any mortgage insurer, (iv) any guarantor, (v) any servicer of the Loan, and (vi) any of these parties' services providers, successors or assigns.     
                        </Typography>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant ='h6'> 
                            <b>I agree to, acknowledge, and represent de following:</b>
                            <br></br>
                            <b>(1) The Complete Information for this Application</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'subtitle1'>
                            ° The information i have provided in this application is true, accurate, and complete as of the date I signed this application.
                            <br></br>
                            ° If the information I submitted changes or I have new information before closing of the Loan, I must change and supplement this application, including providing any update/supplemented real estate sales contract.
                            <br></br>
                            ° For purchase transactions: The terms and conditions of any real state sales contract signed by me in connection with this application are true, accurate, and complete to the best of my knowledge and belief. I have not entered into other agreement, written or oral, in connection with this real estate transaction.
                            <br></br>
                            ° The Lender and Other Loan Participants may rely on the information contained in the application before and after closing of the Loan.
                            <br></br>
                            ° Any intentional or negligent misrepresentation of information may result in the imposition of:
                            <br></br>
                            <ul>
                                (1) civil liability on me, including monetary damages, if a person suffers any loss because the person relied on any misrepresentation that I have made on this application, and/or 
                                <br></br>
                                (2) criminal penalties on me including, but not limited to, fine or imprisonment or both under the provitions of Federal law (18 U.S.C. §§ 1001 et seq.)
                            </ul>                 
                        </Typography>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant ='h6'>
                            <b>(2) The Property's Security</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'subtitle1'>
                            The Loan I have applied for in this application will be secured by a mortgage or deed of trust which provides the Lender a security interest in the property described in this application.
                        </Typography>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant ='h6'>
                            <b>(3) The Property's Appraisal, Value, and Condition</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'subtitle1'>
                            ° Any appraisal or value of the property obtained by the Lender is for use by the Lender and Other Loan Participants.
                        <br></br>
                            ° The Lender and Other Loan Participants have not made any representation or warrenty, express or implied, to me about the property, its condition, or its value.
                        </Typography>
                    </Box>
                    <Box sx={{p:2, margin:2, width:"50%"}}>
                        <Typography variant ='h6'>
                            <b>(4) Electronic Records and Signatures</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'subtitle1'>
                            ° The Lender and Other Loan Participants may keep any paper record and/or electronic record of this application, whether or not the Loan is aprproved. 
                            <br></br>
                            ° If this application is created as (or converted into) an "electronic application", I consent to the use of "electronic records" and "electronic signatures" as the terms are defined in and governed by applicable Federal and/or state electronic transactions laws.
                            <br></br>
                            ° I intend to sign and have signed this application either using my:
                            <ul>
                                (a) electronic signature; or
                                <br></br> 
                                (b) a written signature and agree that if a paper version of this application is converted into and electronic application, the application will be an electronic record, and the representation of my written signatures on this application will be my blinding electronic signature.
                            </ul>
                                ° I agree that the application, if delivered or transmited to the Lender or Other Loan Participants as an electronic record with my electronic signature, will be as effective and enforceable as a paper application signed by me in written
                        </Typography>
                        <br></br>
                        <Typography variant ='h6'>
                            <b>(5) Delinquency</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'subtitle1'>
                            ° The Lender and Other Loan Participants may report information about my account to credit bureaus. Late payments, missed payments, or other defaults on my account may be reflected in my credit report and will likely affect my credit score.
                            <br></br>
                            ° If I have trouble making my payments I understand that I may contact a HUD-approved housing counseling organization for advice about actions I can take to meet my mortgage obligations.
                        </Typography>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant ='h6'>
                            <b>(6) Authorization for Use and Sharing of Information</b>
                        </Typography>
                        <br></br>
                        <Typography variant = 'subtitle1'>
                            By signing below , in addition By signing below, in addition to the representations and agreementsmade above, I expressly authorize the Lender and Other Loan Participants to obtain, use, and share with each other (i) the loan application and related loan information and documentation, (ii) a consumer credit report on me, and (iii) my tax return information, as necessary to perform the actions listed below, for so long as they have an interest in my loan or its servicing:
                            <ul>
                                (a) process and underwrite my loan;
                                <br></br>
                                (b) verify any data contained in my consumer credit report, my loan application and other information supporting my loan application;
                                <br></br>
                                (c) inform credit and investment decisions by the Lender and Other Loan Participants;
                                <br></br>
                                (d) perform audit, quality control, and legal compliance analysis and reviews;
                                <br></br>
                                (e) perform analysis and modeling for risk assessments;
                                <br></br>
                                (f) monitor the account for this loan for potential delinquencies and determine any assistance that may be available to me; and
                                <br></br>
                                (g)  other actions permissible under applicable law.
                            </ul>
                        </Typography>              
                    </Box>
                </Box>
                <Box sx={{p:2, margin:2}}>
                    <RadioGroup row
                        name='agree'
                        value={agree}
                        onChange={handleAgreeChange}
                    >
                        <FormControlLabel value="yes" checked={agree} control={<Radio size='small'/>} label="I hereby accept the Terms and Conditions, Acknoledgements and Agreements." />
                    </RadioGroup>
                </Box>
            </Paper>
        </Box>     
    )
  }