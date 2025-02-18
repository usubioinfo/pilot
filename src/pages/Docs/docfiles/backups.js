const backups = () => {
  return (
    <div>
      <h2 className="mb-4">Backups</h2>
      <p>
        Backups are the backbone of our entire operation. Well, there are a few backbones. We're a little better than your average vertebrate. But the backbone we'll
        be talking about here is backups. Basically if they're not happening, then that's bad. Backups should always be happening. And automated, but we'll get to that in a bit.
        Just know that this is a very important task, and it should be a high priority at all times. HPCs have many moving parts, and things break. Whatever, no biggie.
        Unless you don't have backups. That's a real problem. Here's how we deal with that.
      </p>

      <h4>Rsync</h4>
      <p>
        There are two places where we store backups: NAS1 and NAS2. NAS1 holds long term backups, and NAS2 holds weekly backups. They're stored in different formats
        too. NAS1 holds backups in <code>.tar.gz</code> format, while NAS2 just holds straight copies of the data. If someone's missing data, you can go find it in
        NAS2 and just copy straight into their directory. No unzipping required. These copies are created via Rsync, with massive custom commands in order to reduce
        the useless data being copied. For future reference, we try to minimize how many <code>.</code> folders we back up. This is because these folders often contain
        a ton of useless data, like various caches and configs. Rsync backups happen every Sunday at 1 AM. 

        The file for the schelduled job can be found at <code>/root/rsync.sh</code>.
      </p>

      <h4>Archives</h4>
      <p>
        Archives are stored on NAS1. These are monthly backups, and are currently not completely automated. These archives take a while to create, so it's a good
        idea to detach the processes and output the results into a text file. These are stored in the format <code>yyyy-mm-dd.username.tar.gz</code>.
        These are all in the <code>weekly</code> folder in NAS1. <br></br>

        To backup, use the following command, <code>tar -cvzf <name of backup> <name of directory to backup></name></name></code>
      
      <br></br>
      Next, backups can be managed from the server at, "https://cibdata.quickconnect.to/" or "http://129.123.62.201:5000/". You can get the username and password
      from Aaron and I think Rakesh might also have the document containing the infromation. You sometimes may need to mount the nas folder in the server to the nas folder in the HPC.
      To do this use, <code>mount -nfs nas:/volume1/BioinfoBackup /nas</code> and <code>mount -nfs nas:/volume2/BioinfoBackup2 /nas2</code>. If this doesn't work, check the ip configuration
      on the remote server.
      </p>

      <h4>Why Both?</h4>
      <p>
        Using Rsync creates a copy of the data that isn't compressed. This uses up <i>way</i> more space, so you can't keep as many of these backups around.
        On the flip side, data recovery is much faster (instant) because the data just needs to be copied instead of unarchived. With the archives, we can 
        keep more of them, so data recovery can go further back in time, but because we typically archive terabytes of data, it can be up to a day or two before 
        we can recover the data. Using both methods gives us some flexibility in our data recovery depending on the situation.
      </p>
    </div>
  );
}

export {backups};