const vms = () => {
  return (
    <div>
      <h2 className="mb-4">Virtual Machines</h2>
      <p>
        Security is very important to modern HPC clusters. You need to protect the HPC from the outside world, but you also need to make sure 
        that you're protected from within as well. Sure, researchers might not being trying to hack into the servers, but they can accidentally do things 
        that use up massive amounts of resources which then can affect the HPC's performance. There are various ways of mitigating this problem,
        and virtual machines (VMs) are just one way of doing this. 
      </p>

      <h4>Upsides</h4>

      <p>
        I've already somewhat explained the 'why' above, but there are more specific reasons. When a student is given a VM and they max out its resources,
        this doesn't affect the cluster because there's a max amount of resources that gets allocated to the VM. No more resources get allocated even if the 
        VM is using all its RAM and storage. We can also deploy multiple projects to one VM as well, making certain aspects of deployment easier. Another added 
        benefit of the VMs is that it gives students a way of testing out their software directly on the cluster so that deployment is as easy as opening
        up ports and forwarding.
      </p>

      <h4>Downsides</h4>

      <p>
        We're actually currently looking at moving away from VMs, and toward containerization via Docker. A problem with the VMs is even though we can limit the 
        resource usage, they still require lots of resources because you're basically running an entire virtual operating system. This means your software is
        less portable because you need an instance of a specific operating system running instead an OS-agnostic container. It's also faster to spin up containers
        than VMs. We can then reduce the need for a workstation on the HPC and students can test their software in containers on their local workstations. 
        If it works, then it'll work on the cluster. Backups are also much easier and faster with containers, so for our use case, containers make much more sense.
      </p>

      <p>
        There are a few VM's that needs to be restarted. metagenomics, HostPathogen, Ubuntu-18-VM-4, databases and CentOS-7-VM-3. Some of the vm's can be found underneath mlister.
        To start use, <code>vboxmanage startvm CentOS-7-VM-3 --type headless</code>.  You can attach to the vm by using the command <code>virtualbox</code>. However, make sure you
        start the vm as headless and make sure when exiting the vm, you just detach the gui. 
      </p>

      <p>
        It is also important on the vms to make sure that the celeryd is running on the relavent web tools. To do this, run <code>python manage.py celeryd -l info</code> running in the background.
      </p>

      <p>
        Finally, you also need to make sure that the filesystems on the Virtual Machine for deepHPI and PredHPI are mounted with <code>sshfs</code>. First you need to
        login as cloaiza (Use port 10022 to ssh in) (Don't sudo in, this causes problems). You can ask arround for the password. Afterwards, to sync the filesystem for PredHPI, use this command,<br></br><br></br>

        <code>sudo sshfs -o allow_other,nonempty cloaiza@129.123.62.5:/home/cloaiza/PredHPI_SLURM /var/www/html/PredHPI/SLURM</code>.

        <br></br><br></br>For deepHPI,<br></br><br></br>

        <code>sudo sshfs -o allow_other,nonempty cloaiza@129.123.62.5:/home/cloaiza/Deepteractomer /var/www/html/Deepteractomer/SLURM</code>
      </p>
    </div>
  );
}

export {vms};