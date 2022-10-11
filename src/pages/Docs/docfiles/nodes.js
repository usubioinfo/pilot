const nodes = () => {
  return (
    <div>
      <h2 className="mb-4">Nodes</h2>
      <p>
        So if you've been into the server room, you've probably asked yourself what all the wires are for, and this is where we'll answer that question.
        The first thing you need to know is why there are wires in the first place. What are we trying to achieve when we install a node? Each node 
        needs to connect to the following:
      </p>

      <ul>
        <li>The internet</li>
        <li>Other nodes</li>
        <li>The KVM switch</li>
        <li>Power</li>
      </ul>

      <p>
        They also need the ACT software to be running on them as well. Don't worry about the specifics here, as our nodes come with all the software on them. 
        SLURM also needs to be up and running on the node. Ideally, the node gets connected to Pilot so you can check uptime as well.
      </p>
      
      <p>
        You can find documentation for the system used on the Advanced Clustering website. There is a Apex Clustering manual at, 
        <a href="https://www.advancedclustering.com/wp-content/uploads/2017/02/Apex_Cluster_Manual-2.2-1.pdf">https://www.advancedclustering.com/wp-content/uploads/2017/02/Apex_Cluster_Manual-2.2-1.pdf</a>. 
        It is also important to know how to restart slurm if it ever goes down. You can start the slurm controller on the head node with, <br></br><br></br>
        <code>systemctl restart slurmctld</code>.

        You can restart slurm on the compute node with<br></br><br></br> <code>systemctl restart slurmd</code>.<br></br><br></br>
      
      Next, you can find additional documentation for slurm at, <a href="https://slurm.schedmd.com/quickstart_admin.html">
      https://slurm.schedmd.com/quickstart_admin.html</a>.
      </p>
      <p>
        Next, it's also important to learn that our Websites use Apache for its webserver. If adding a new tool to the site,
        it's important to make sure that apache has been modified to recognize the new tool.
      </p>
      <p>
        Finally, the web pages use bootstrap for it's base for it's css. You can find additional documentation on it here, <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">https://getbootstrap.com/docs/4.1/getting-started/introduction/</a>.
      </p>
    </div>
  );
}

export {nodes};