import React from 'react';
import '@reach/dialog/styles.css';

import { Dialog, Button, Stack } from '@heathmont/moon-components';

import Preview from '../../../components/codePreview/Preview';
import { Header } from '@heathmont/moon-core';
import {
  ControlsClose,
  FilesGlasses,
  FilesPrint,
  ControlsChevronLeft,
} from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import { Footer } from '@heathmont/moon-core';
import Table from '../../../components/Table';

const ExampleWithHeader = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Preview
        title="Example with separate header"
        preview={
          <>
            <Button variant="primary" onClick={() => setShowDialog(true)}>
              Open Dialog
            </Button>
            <Dialog
              isOpen={showDialog}
              onDismiss={() => setShowDialog(false)}
              maxWidth="760px"
              position="TOP"
              heading={
                <>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                </>
              }
            >
              <Stack>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam blandit massa at lorem fermentum volutpat. Aliquam
                  varius faucibus turpis, in facilisis dui dictum ac. Nulla ac
                  consequat enim. Ut lobortis ultricies mauris eget volutpat.
                  Aliquam aliquam nisl in nulla sagittis, eget viverra est
                  ullamcorper. Morbi vel eros sed mauris dignissim congue et nec
                  ligula. Duis quis tellus a est facilisis finibus. Duis varius
                  libero id arcu pretium, et ultrices diam tincidunt.
                </p>
              </Stack>
            </Dialog>
          </>
        }
        code={`import { Dialog, Button, Stack } from '@heathmont/moon-components';

const [showDialog, setShowDialog] = React.useState(false);

<Button variant="primary" onClick={() => setShowDialog(true)}>
  Open Dialog
</Button>
<Dialog
  isOpen={showDialog}
  onDismiss={() => setShowDialog(false)}
  maxWidth="760px"
  position="TOP"
  heading={
    <>
      <h1>Lorem ipsum dolor sit amet.</h1>
    </>
  }
>
  <Stack>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam blandit massa at lorem fermentum volutpat. Aliquam
      varius faucibus turpis, in facilisis dui dictum ac. Nulla ac
      consequat enim. Ut lobortis ultricies mauris eget volutpat.
      Aliquam aliquam nisl in nulla sagittis, eget viverra est
      ullamcorper. Morbi vel eros sed mauris dignissim congue et nec
      ligula. Duis quis tellus a est facilisis finibus. Duis varius
      libero id arcu pretium, et ultrices diam tincidunt.
    </p>
  </Stack>
</Dialog>
        `}
      />
    </>
  );
};

const ExampleWithHeader2 = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Preview
        title="Variant new"
        preview={
          <>
            <Button variant="primary" onClick={() => setShowDialog(true)}>
              Open Dialog
            </Button>
            <Dialog
              isOpen={showDialog}
              onDismiss={() => setShowDialog(false)}
              maxWidth="760px"
              position="TOP"
              hideCloseButton
              variant="new"
              heading={
                <Header
                  backButton={<ControlsChevronLeft fontSize={rem(32)} />}
                  closeButton={
                    <ControlsClose
                      fontSize={rem(32)}
                      onClick={() => setShowDialog(false)}
                    />
                  }
                  icons={[<FilesGlasses />, <FilesPrint />]}
                  isDivider={true}
                >
                  Title of the modal title of the modal title of the modal
                </Header>
              }
            >
              <>
                <p className="p-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam blandit massa at lorem fermentum volutpat. Aliquam
                  varius faucibus turpis, in facilisis dui dictum ac. Nulla ac
                  consequat enim. Ut lobortis ultricies mauris eget volutpat.
                  Aliquam aliquam nisl in nulla sagittis, eget viverra est
                  ullamcorper. Morbi vel eros sed mauris dignissim congue et nec
                  ligula. Duis quis tellus a est facilisis finibus. Duis varius
                  libero id arcu pretium, et ultrices diam tincidunt.
                </p>
                <Footer
                  primButton={
                    <Button fullWidth variant="primary" size="small">
                      Button
                    </Button>
                  }
                  secButton={
                    <Button fullWidth variant="tertiary" size="small">
                      Button
                    </Button>
                  }
                  tertButton={
                    <Button fullWidth variant="secondary" size="small">
                      Button
                    </Button>
                  }
                  isDivider
                />
              </>
            </Dialog>
          </>
        }
        code={`import { Dialog, Button } from '@heathmont/moon-components';
import { Header } from '@heathmont/moon-core';
import { Footer } from '@heathmont/moon-core';
import {
  ControlsClose,
  FilesGlasses,
  FilesPrint,
  ControlsChevronLeft,
} from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const [showDialog, setShowDialog] = React.useState(false);

<Button variant="secondary" onClick={() => setShowDialog(true)}>Open Dialog</Button>
<Dialog
  isOpen={showDialog}
  onDismiss={() => setShowDialog(false)}
  maxWidth="760px"
  position="TOP"
  hideCloseButton
  variant="new"
  heading={
    <Header
      backButton={<ControlsChevronLeft fontSize={rem(32)} />}
      closeButton={
        <ControlsClose
          fontSize={rem(32)}
          onClick={() => setShowDialog(false)}
        />
      }
      icons={[<FilesGlasses />, <FilesPrint />]}
      isDivider={true}
    >
      Title of the modal title of the modal title of the modal
    </Header>
  }
>
  <>
    <p className="p-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam blandit massa at lorem fermentum volutpat. Aliquam
      varius faucibus turpis, in facilisis dui dictum ac. Nulla ac
      consequat enim. Ut lobortis ultricies mauris eget volutpat.
      Aliquam aliquam nisl in nulla sagittis, eget viverra est
      ullamcorper. Morbi vel eros sed mauris dignissim congue et nec
      ligula. Duis quis tellus a est facilisis finibus. Duis varius
      libero id arcu pretium, et ultrices diam tincidunt.
    </p>
    <Footer
      primButton={
        <Button fullWidth variant="primary" size="small">
          Button
        </Button>
      }
      secButton={
        <Button fullWidth variant="tertiary" size="small">
          Button
        </Button>
      }
      tertButton={
        <Button fullWidth variant="secondary" size="small">
          Button
        </Button>
      }
      isDivider
    />
  </>
</Dialog>

        `}
      />
    </>
  );
};

const ExampleWithoutCloseButton = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Preview
        title="Example without close button"
        preview={
          <>
            <Button variant="primary" onClick={() => setShowDialog(true)}>
              Open Dialog
            </Button>
            <Dialog
              isOpen={showDialog}
              onDismiss={() => setShowDialog(false)}
              maxWidth="760px"
              position="TOP"
              hideCloseButton
            >
              <Stack>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam blandit massa at lorem fermentum volutpat. Aliquam
                  varius faucibus turpis, in facilisis dui dictum ac. Nulla ac
                  consequat enim. Ut lobortis ultricies mauris eget volutpat.
                  Aliquam aliquam nisl in nulla sagittis, eget viverra est
                  ullamcorper. Morbi vel eros sed mauris dignissim congue et nec
                  ligula. Duis quis tellus a est facilisis finibus. Duis varius
                  libero id arcu pretium, et ultrices diam tincidunt.
                </p>
              </Stack>
            </Dialog>
          </>
        }
        code={`import { Dialog, Button, Stack } from '@heathmont/moon-components';

const [showDialog, setShowDialog] = React.useState(false);
      
<Button variant="primary" onClick={() => setShowDialog(true)}>
  Open Dialog
</Button>
<Dialog
  isOpen={showDialog}
  onDismiss={() => setShowDialog(false)}
  maxWidth="760px"
  position="TOP"
  hideCloseButton
>
  <Stack>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam blandit massa at lorem fermentum volutpat. Aliquam
      varius faucibus turpis, in facilisis dui dictum ac. Nulla ac
      consequat enim. Ut lobortis ultricies mauris eget volutpat.
      Aliquam aliquam nisl in nulla sagittis, eget viverra est
      ullamcorper. Morbi vel eros sed mauris dignissim congue et nec
      ligula. Duis quis tellus a est facilisis finibus. Duis varius
      libero id arcu pretium, et ultrices diam tincidunt.
    </p>
  </Stack>
</Dialog>
        `}
      />
    </>
  );
};

const Example = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Preview
        title="Default example"
        preview={
          <>
            <Button variant="primary" onClick={() => setShowDialog(true)}>
              Open Dialog
            </Button>
            <Dialog
              isOpen={showDialog}
              onDismiss={() => setShowDialog(false)}
              maxWidth="760px"
              position="TOP"
            >
              <Stack>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam blandit massa at lorem fermentum volutpat. Aliquam
                  varius faucibus turpis, in facilisis dui dictum ac. Nulla ac
                  consequat enim. Ut lobortis ultricies mauris eget volutpat.
                  Aliquam aliquam nisl in nulla sagittis, eget viverra est
                  ullamcorper. Morbi vel eros sed mauris dignissim congue et nec
                  ligula. Duis quis tellus a est facilisis finibus. Duis varius
                  libero id arcu pretium, et ultrices diam tincidunt. Aenean
                  laoreet, velit at tempus eleifend, lectus turpis interdum
                  ipsum, ac porta elit libero at arcu. Nam maximus magna vel
                  orci pulvinar, et dignissim mi egestas. Pellentesque dapibus
                  rhoncus ex, a finibus tortor sagittis quis. In nunc mauris,
                  scelerisque vitae elit pulvinar, consequat accumsan leo. Proin
                  varius maximus erat sed convallis. Aliquam convallis turpis
                  turpis, eget euismod justo elementum at. Curabitur ligula
                  velit, volutpat eget lacus sed, congue hendrerit turpis. Ut
                  justo felis, ultricies et ornare quis, finibus ac lectus. Nam
                  scelerisque felis nec massa convallis, eu ornare mauris
                  posuere. Vivamus lacinia feugiat odio. Mauris cursus eu libero
                  sit amet sollicitudin. Proin urna lectus, sodales nec
                  ultricies ut, pharetra a mauris. Cras quis pharetra velit.
                  Pellentesque magna erat, bibendum volutpat facilisis vitae,
                  euismod in odio. Donec id sem vehicula, mollis eros porttitor,
                  mattis sem. Etiam augue ligula, consectetur lobortis
                  ullamcorper a, ullamcorper a lectus. Nullam non auctor quam.
                  Morbi a lorem ut eros lobortis ultricies vitae sed lacus.
                  Proin auctor vestibulum lorem a porttitor. Nunc ullamcorper
                  leo risus. Integer tincidunt erat leo, ut lacinia est volutpat
                  sit amet. Nulla laoreet molestie pharetra. Suspendisse sed
                  magna erat. Fusce et orci orci. Suspendisse sit amet finibus
                  mi. Integer fringilla venenatis dolor, porttitor bibendum
                  lorem mattis et. Maecenas nisl nisl, finibus sed dolor vel,
                  rhoncus euismod lorem. Maecenas sit amet gravida nunc.
                  Praesent iaculis nunc elit, ut viverra nisl aliquam non. Donec
                  eget ex velit. Pellentesque sed laoreet nunc. Morbi eget augue
                  cursus, laoreet lorem in, tempus magna. Aliquam quis auctor
                  nibh, id ornare sapien. Aenean sem magna, tempus a tempus in,
                  lobortis vitae nisi. Mauris lobortis tellus sit amet elit
                  maximus ornare. Sed interdum ac purus quis feugiat. Praesent
                  nunc quam, gravida placerat dui eget, tempus pharetra urna.
                  Maecenas eros augue, rutrum vitae maximus dictum, consectetur
                  ut orci. Phasellus ut consequat urna. Morbi pellentesque
                  sapien mauris, quis ornare diam ultricies eu. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Etiam
                  tincidunt lacus purus, sit amet ultricies elit dapibus et.
                  Vestibulum at velit eu mauris tincidunt lobortis quis sed leo.
                  Vivamus non rhoncus massa, et bibendum ligula. Sed pulvinar,
                  tortor eu faucibus vestibulum, nunc magna laoreet leo, ut
                  elementum diam ipsum vitae purus. Vestibulum egestas sit amet
                  elit egestas auctor. Mauris vestibulum ex at erat viverra
                  ultricies. Suspendisse et nisi enim. Aenean ut velit sit amet
                  diam aliquet molestie non quis urna. Praesent nec arcu non
                  nisl maximus tempus in in ligula. Sed sodales eu elit
                  facilisis tempus. Suspendisse viverra porta velit, mollis
                  tempor purus aliquam id. Vestibulum sit amet vehicula dolor.
                  Vestibulum orci nulla, sodales vitae euismod at, aliquam
                  egestas sapien. Pellentesque et massa et lectus imperdiet
                  ullamcorper. Integer sit amet semper nisl, sed suscipit eros.
                  Nunc quis quam leo. Pellentesque porttitor, ex vitae ultrices
                  interdum, sapien tellus dictum lectus, quis convallis elit
                  felis vitae nulla. Nulla volutpat cursus urna, sed facilisis
                  nisi consectetur sed. Praesent ac euismod odio. Mauris laoreet
                  id ante vel finibus. Nulla nec egestas mi. Aenean leo lacus,
                  imperdiet at lobortis nec, egestas ac mi. Praesent ut molestie
                  est. Sed est dui, rhoncus eget semper id, egestas in sapien.
                  Vestibulum aliquet, orci eget ultricies placerat, felis leo
                  euismod enim, efficitur lacinia nulla ipsum non odio. Etiam id
                  urna ut tortor egestas mattis. Nullam eget urna ac massa
                  facilisis auctor nec at diam. Aliquam imperdiet, tortor non
                  dignissim semper, eros sem congue lacus, a vehicula diam
                  tellus ut ligula. Sed eget porta nibh, nec interdum urna. In
                  tempor placerat massa, at imperdiet leo tincidunt eget.
                  Vestibulum eu laoreet nisl, et gravida mauris. Aliquam erat
                  volutpat. Vivamus elit diam, fringilla varius congue quis,
                  dignissim non sapien. Curabitur a magna vitae risus tempus
                  vulputate. Ut metus metus, iaculis in tincidunt ullamcorper,
                  eleifend vitae mauris. Aliquam erat volutpat. Nunc eu nisi
                  placerat, feugiat eros non, fringilla purus. Aliquam erat
                  volutpat. Morbi sit amet imperdiet felis, sit amet dapibus
                  lacus. Sed aliquam ipsum vitae ipsum maximus convallis. Donec
                  quis nulla placerat, scelerisque tellus ut, ullamcorper
                  sapien. Pellentesque enim lacus, ornare mollis nisl vitae,
                  rutrum tincidunt mauris. Sed suscipit, augue in venenatis
                  ultrices, augue nunc viverra turpis, eget ornare tellus lectus
                  sit amet felis. In aliquam ullamcorper nulla sit amet
                  tristique. Pellentesque odio ipsum, pulvinar sit amet est
                  eget, maximus accumsan leo. Aenean consequat tellus vel
                  pulvinar bibendum. Suspendisse finibus volutpat nisl, id
                  dictum est feugiat sit amet. Pellentesque euismod lectus leo.
                  Integer imperdiet nisi egestas quam posuere, mollis imperdiet
                  odio tincidunt. Nam non quam leo. Vivamus vulputate metus sed
                  velit laoreet euismod id et turpis. Vestibulum dictum ac
                  turpis quis ultrices. Vivamus non semper nunc. Nullam vitae
                  dignissim augue. Aliquam mollis nibh enim, sit amet accumsan
                  est suscipit ac. Cras dignissim aliquet turpis id aliquet.
                  Mauris erat magna, mattis ut ligula eu, ultricies interdum
                  dolor. Cras nec congue mi, vitae faucibus nisi. Fusce
                  tincidunt ultrices eleifend. Vestibulum sit amet porta lectus.
                  Fusce dapibus tortor in lectus vehicula lobortis. Vestibulum
                  ac felis congue, consectetur nunc sed, porttitor lorem.
                  Maecenas non ultrices diam, non molestie neque. Donec metus
                  odio, bibendum nec facilisis vel, mattis ut ex. Morbi luctus
                  ex eu est tincidunt lacinia. Sed commodo eget neque eget
                  aliquet. Phasellus tincidunt justo imperdiet nunc scelerisque,
                  sit amet interdum lorem dignissim. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.{' '}
                </p>
              </Stack>
            </Dialog>
          </>
        }
        code={`import { Dialog, Button, Stack } from '@heathmont/moon-components';

const [showDialog, setShowDialog] = React.useState(false);

<Button variant="primary" onClick={() => setShowDialog(true)}>Open Dialog</Button>
<Dialog
  isOpen={showDialog}
  onDismiss={() => setShowDialog(false)}
  maxWidth="760px"
  position="TOP"
>
  <Stack>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam blandit massa at lorem fermentum volutpat. Aliquam
      varius faucibus turpis, in facilisis dui dictum ac. Nulla ac
      consequat enim. Ut lobortis ultricies mauris eget volutpat.
      Aliquam aliquam nisl in nulla sagittis, eget viverra est
      ullamcorper. Morbi vel eros sed mauris dignissim congue et nec
      ligula. Duis quis tellus a est facilisis finibus. Duis varius
      libero id arcu pretium, et ultrices diam tincidunt. Aenean
      laoreet, velit at tempus eleifend, lectus turpis interdum
      ipsum, ac porta elit libero at arcu. Nam maximus magna vel
      orci pulvinar, et dignissim mi egestas. Pellentesque dapibus
      rhoncus ex, a finibus tortor sagittis quis. In nunc mauris,
      scelerisque vitae elit pulvinar, consequat accumsan leo. Proin
      varius maximus erat sed convallis. Aliquam convallis turpis
      turpis, eget euismod justo elementum at. Curabitur ligula
      velit, volutpat eget lacus sed, congue hendrerit turpis. Ut
      justo felis, ultricies et ornare quis, finibus ac lectus. Nam
      scelerisque felis nec massa convallis, eu ornare mauris
      posuere. Vivamus lacinia feugiat odio. Mauris cursus eu libero
      sit amet sollicitudin. Proin urna lectus, sodales nec
      ultricies ut, pharetra a mauris. Cras quis pharetra velit.
      Pellentesque magna erat, bibendum volutpat facilisis vitae,
      euismod in odio. Donec id sem vehicula, mollis eros porttitor,
      mattis sem. Etiam augue ligula, consectetur lobortis
      ullamcorper a, ullamcorper a lectus. Nullam non auctor quam.
      Morbi a lorem ut eros lobortis ultricies vitae sed lacus.
      Proin auctor vestibulum lorem a porttitor. Nunc ullamcorper
      leo risus. Integer tincidunt erat leo, ut lacinia est volutpat
      sit amet. Nulla laoreet molestie pharetra. Suspendisse sed
      magna erat. Fusce et orci orci. Suspendisse sit amet finibus
      mi. Integer fringilla venenatis dolor, porttitor bibendum
      lorem mattis et. Maecenas nisl nisl, finibus sed dolor vel,
      rhoncus euismod lorem. Maecenas sit amet gravida nunc.
      Praesent iaculis nunc elit, ut viverra nisl aliquam non. Donec
      eget ex velit. Pellentesque sed laoreet nunc. Morbi eget augue
      cursus, laoreet lorem in, tempus magna. Aliquam quis auctor
      nibh, id ornare sapien. Aenean sem magna, tempus a tempus in,
      lobortis vitae nisi. Mauris lobortis tellus sit amet elit
      maximus ornare. Sed interdum ac purus quis feugiat. Praesent
      nunc quam, gravida placerat dui eget, tempus pharetra urna.
      Maecenas eros augue, rutrum vitae maximus dictum, consectetur
      ut orci. Phasellus ut consequat urna. Morbi pellentesque
      sapien mauris, quis ornare diam ultricies eu. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Etiam
      tincidunt lacus purus, sit amet ultricies elit dapibus et.
      Vestibulum at velit eu mauris tincidunt lobortis quis sed leo.
      Vivamus non rhoncus massa, et bibendum ligula. Sed pulvinar,
      tortor eu faucibus vestibulum, nunc magna laoreet leo, ut
      elementum diam ipsum vitae purus. Vestibulum egestas sit amet
      elit egestas auctor. Mauris vestibulum ex at erat viverra
      ultricies. Suspendisse et nisi enim. Aenean ut velit sit amet
      diam aliquet molestie non quis urna. Praesent nec arcu non
      nisl maximus tempus in in ligula. Sed sodales eu elit
      facilisis tempus. Suspendisse viverra porta velit, mollis
      tempor purus aliquam id. Vestibulum sit amet vehicula dolor.
      Vestibulum orci nulla, sodales vitae euismod at, aliquam
      egestas sapien. Pellentesque et massa et lectus imperdiet
      ullamcorper. Integer sit amet semper nisl, sed suscipit eros.
      Nunc quis quam leo. Pellentesque porttitor, ex vitae ultrices
      interdum, sapien tellus dictum lectus, quis convallis elit
      felis vitae nulla. Nulla volutpat cursus urna, sed facilisis
      nisi consectetur sed. Praesent ac euismod odio. Mauris laoreet
      id ante vel finibus. Nulla nec egestas mi. Aenean leo lacus,
      imperdiet at lobortis nec, egestas ac mi. Praesent ut molestie
      est. Sed est dui, rhoncus eget semper id, egestas in sapien.
      Vestibulum aliquet, orci eget ultricies placerat, felis leo
      euismod enim, efficitur lacinia nulla ipsum non odio. Etiam id
      urna ut tortor egestas mattis. Nullam eget urna ac massa
      facilisis auctor nec at diam. Aliquam imperdiet, tortor non
      dignissim semper, eros sem congue lacus, a vehicula diam
      tellus ut ligula. Sed eget porta nibh, nec interdum urna. In
      tempor placerat massa, at imperdiet leo tincidunt eget.
      Vestibulum eu laoreet nisl, et gravida mauris. Aliquam erat
      volutpat. Vivamus elit diam, fringilla varius congue quis,
      dignissim non sapien. Curabitur a magna vitae risus tempus
      vulputate. Ut metus metus, iaculis in tincidunt ullamcorper,
      eleifend vitae mauris. Aliquam erat volutpat. Nunc eu nisi
      placerat, feugiat eros non, fringilla purus. Aliquam erat
      volutpat. Morbi sit amet imperdiet felis, sit amet dapibus
      lacus. Sed aliquam ipsum vitae ipsum maximus convallis. Donec
      quis nulla placerat, scelerisque tellus ut, ullamcorper
      sapien. Pellentesque enim lacus, ornare mollis nisl vitae,
      rutrum tincidunt mauris. Sed suscipit, augue in venenatis
      ultrices, augue nunc viverra turpis, eget ornare tellus lectus
      sit amet felis. In aliquam ullamcorper nulla sit amet
      tristique. Pellentesque odio ipsum, pulvinar sit amet est
      eget, maximus accumsan leo. Aenean consequat tellus vel
      pulvinar bibendum. Suspendisse finibus volutpat nisl, id
      dictum est feugiat sit amet. Pellentesque euismod lectus leo.
      Integer imperdiet nisi egestas quam posuere, mollis imperdiet
      odio tincidunt. Nam non quam leo. Vivamus vulputate metus sed
      velit laoreet euismod id et turpis. Vestibulum dictum ac
      turpis quis ultrices. Vivamus non semper nunc. Nullam vitae
      dignissim augue. Aliquam mollis nibh enim, sit amet accumsan
      est suscipit ac. Cras dignissim aliquet turpis id aliquet.
      Mauris erat magna, mattis ut ligula eu, ultricies interdum
      dolor. Cras nec congue mi, vitae faucibus nisi. Fusce
      tincidunt ultrices eleifend. Vestibulum sit amet porta lectus.
      Fusce dapibus tortor in lectus vehicula lobortis. Vestibulum
      ac felis congue, consectetur nunc sed, porttitor lorem.
      Maecenas non ultrices diam, non molestie neque. Donec metus
      odio, bibendum nec facilisis vel, mattis ut ex. Morbi luctus
      ex eu est tincidunt lacinia. Sed commodo eget neque eget
      aliquet. Phasellus tincidunt justo imperdiet nunc scelerisque,
      sit amet interdum lorem dignissim. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos.{' '}
    </p>
  </Stack>
</Dialog>        
        `}
      />
    </>
  );
};

export default function PageDialog() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Dialog</h1>
        <p className="text-lg mt-4">
          The modal dialog (or modal as we call it) is used to capture attention
          so users are informed about a task, critical information or a decision
          they have to make. It usually resides on the top of a page.
        </p>
        <p className="text-lg mt-4">
          When modals are active, users are unable to see the content that’s
          currently on the page. They also won’t be able to return to what they
          were previously doing until the modal is dismissed or a task/decision
          is completed.
        </p>
        <p className="text-lg mt-4">
          As experienced astronauts, we recommend using modals sparingly. They
          are effective when used correctly, but they can also be disruptive.
        </p>

        <p className="text-lg mt-4 font-bold">When to use a modal dialog</p>
        <p className="text-lg">
          Modals should only be used when an almost-instant response is required
          from the user. The task within the modal should also be short and
          non-recurring. Should the task be a recurring one, this has to be done
          differently.
        </p>

        <p className="text-lg mt-4 font-bold">
          Presenting critical information
        </p>
        <p className="text-lg">
          Use modals to present critical urgent information to the user, e.g.
          system errors or something that has happened as a result of their
          action.
        </p>

        <p className="text-lg mt-4 font-bold">Confirming user decisions</p>
        <p className="text-lg">
          Confirming user decisions can be done with a modal. It’s important to
          ensure that the decision, and any potential actions that may result
          from it, is clearly explained within the modal.
        </p>
      </section>

      {/* Default */}
      <section className="mt-12">
        <Example />
      </section>

      <section className="mt-8">
        <ExampleWithHeader />
      </section>

      <section className="mt-8">
        <ExampleWithoutCloseButton />
      </section>

      <section className="mt-8">
        <ExampleWithHeader2 />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Dialog Footer component</h2>
        <Table
          data={[
            {
              name: 'disableScrollLock',
              type: 'boolean',
              required: false,
              default: '-',
              description: '',
            },
            {
              name: 'heading',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: ' ',
            },
            {
              name: 'hideCloseButton',
              type: 'boolean',
              required: false,
              default: '-',
              description: ' ',
            },
            {
              name: 'variant',
              type: 'default | new',
              required: false,
              default: 'false',
              description: ' ',
            },
            {
              name: 'position',
              type: 'TOP | CENTER',
              required: false,
              default: '-',
              description: ' ',
            },
            {
              name: 'maxWidth',
              type: 'string',
              required: false,
              default: '-',
              description: ' ',
            },
          ]}
        />
      </section>
    </>
  );
}
