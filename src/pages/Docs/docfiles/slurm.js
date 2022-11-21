const slurm = () => {
  return (
    <div>
      <h2 className="mb-4">Slurm/Apache</h2>
      <p> 
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

export {slurm};