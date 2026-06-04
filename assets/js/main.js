// Handle open link in new tab
function openLink(link){
  window.open(
    link,
    '_blank' // <- This is what makes it open in a new window.
  );
}


//  Handling the view certificate button
function viewCertificate(link) {
  if (link == '1OP81Y44LZQK') {
    openLink('https://www.dicoding.com/certificates/1OP81Y44LZQK')
  } else if (link == '287RYZ5MSKKH') {
    openLink('https://www.coursera.org/account/accomplishments/specialization/certificate/287RYZ5MSKKH')
  } else if (link == 'AC-097-37056374-98') {
    openLink('https://apidev.agunacourse.com/media/media/certificate/AC-097-37056374-98.pdf')
  } else if (link == 'nokia-nrs-1') {
    openLink('https://www.credly.com/badges/c03a62e8-fc30-4e84-a01e-dc55f95945d7/linked_in_profile')
  }
}